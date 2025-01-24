// app/api/users/route.ts
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        products: {
          select: {
            id: true,
            titleEn: true,
            status: true
          }
        }
      }
    })
    return Response.json(users)
  } catch (error) {
    return Response.json({ 
      error: 'Failed to fetch users', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}