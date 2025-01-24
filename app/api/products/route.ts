// app/api/products/route.ts

import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { Product, ProductWithImages, ProductCreateInput } from '@/app/utils/products';

const prisma = new PrismaClient();

// GET: Fetch all products
export async function GET(): Promise<Response> {
  try {
    const products: ProductWithImages[] = await prisma.product.findMany({
      include: {
        images: true
      }
    });
    return new Response(JSON.stringify(products), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error loading products:", error);
    return new Response(JSON.stringify({ error: 'Unable to load products' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  } finally {
    await prisma.$disconnect();
  }
}

// POST: Create a new product
export async function POST(request: Request): Promise<Response> {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data: ProductCreateInput = await request.json();
    const product: ProductWithImages = await prisma.product.create({
      data: {
        ...data,
        images: data.images
      },
      include: {
        images: true
      }
    });

    revalidatePath('/admin');
    return new Response(JSON.stringify(product), { 
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response(JSON.stringify({ error: 'Unable to create product' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  } finally {
    await prisma.$disconnect();
  }
}

// PUT: Update a product
export async function PUT(request: Request): Promise<Response> {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await request.json();
    const { id, ...updateData } = data;

    const product: ProductWithImages = await prisma.product.update({
      where: { id },
      data: updateData,
      include: {
        images: true
      }
    });

    revalidatePath('/admin');
    return new Response(JSON.stringify(product), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return new Response(JSON.stringify({ error: 'Unable to update product' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE: Delete a product
export async function DELETE(request: Request): Promise<Response> {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return new Response(JSON.stringify({ error: 'Product ID is required' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    await prisma.product.delete({
      where: { id }
    });

    revalidatePath('/admin');
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting product:", error);
    return new Response(JSON.stringify({ error: 'Unable to delete product' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  } finally {
    await prisma.$disconnect();
  }
}