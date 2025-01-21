import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../lib/auth-options';
import { Session } from 'next-auth';

// Crea un'istanza singleton di PrismaClient
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
export const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

function isValidSession(session: Session | null): session is Session & { user: { username: string; role: string } } {
  return session !== null && 
         session.user !== undefined && 
         'username' in session.user &&
         'role' in session.user &&
         session.user.role === 'ADMIN';
}

export async function POST(request: Request): Promise<Response> {
  try {
    const session = await getServerSession(authOptions);
    
    if (!isValidSession(session)) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const bodyText = await request.text();
    const body = JSON.parse(bodyText);
    
    const { contentKey, type, page, section, value, defaultValue } = body;
    const existingContent = await prisma.content.findUnique({
      where: { contentKey }
    });

    let content;
    if (existingContent) {
      await prisma.contentHistory.create({
        data: {
          contentKey,
          type: existingContent.type,
          page: existingContent.page,
          section: existingContent.section,
          value,
          userId: session.user.username
        }
      });

      content = await prisma.content.update({
        where: { contentKey },
        data: { 
          currentValue: value,
          updatedAt: new Date()
        }
      });
    } else {
      content = await prisma.content.create({
        data: {
          contentKey,
          type,
          page,
          section,
          defaultValue: defaultValue || value,
          currentValue: value
        }
      });
    }

    return Response.json(content, { status: 200 });
  } catch (error) {
    console.error('Content save error:', error);
    return Response.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}

export async function GET(request: Request): Promise<Response> {
  try {
    const session = await getServerSession(authOptions);
    
    if (!isValidSession(session)) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const url = request.url ? new URL(request.url) : null;
    if (!url) {
      return Response.json({ error: 'Invalid request URL' }, { status: 400 });
    }

    const contentKey = url.searchParams.get('contentKey');

    if (!contentKey) {
      return Response.json({ error: 'Missing content key' }, { status: 400 });
    }

    const content = await prisma.content.findUnique({
      where: { contentKey }
    });

    if (!content) {
      return Response.json({ error: 'Content not found' }, { status: 404 });
    }

    return Response.json(content, { status: 200 });
  } catch (error) {
    console.error('Content retrieval error:', error);
    return Response.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}