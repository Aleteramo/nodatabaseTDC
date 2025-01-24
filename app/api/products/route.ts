// app/api/products/route.ts

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

// GET: Fetch all products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        images: true
      }
    });
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error loading products:", error);
    return NextResponse.json({ error: 'Unable to load products' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// POST: Create a new product
export async function POST(request: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    
    // Get the user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email! }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const product = await prisma.product.create({
      data: {
        name: data.name,
        nameEn: data.nameEn,
        nameIt: data.nameIt,
        description: data.description,
        descriptionEn: data.descriptionEn,
        descriptionIt: data.descriptionIt,
        price: data.price,
        status: data.status || 'AVAILABLE',
        brand: data.brand,
        model: data.model,
        year: data.year,
        condition: data.condition,
        ownerId: user.id,
        ...(data.imageUrl && {
          images: {
            create: [{
              url: data.imageUrl,
              isMain: true
            }]
          }
        })
      },
      include: {
        images: true
      }
    });

    revalidatePath('/[locale]/archive');
    revalidatePath('/[locale]/admin');
    
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: 'Unable to create product' }, { status: 500 });
  }
}

// PUT: Update an existing product
export async function PUT(request: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { id, imageUrl, ...updateData } = data;

    const product = await prisma.product.update({
      where: { id },
      data: {
        ...updateData,
        ...(imageUrl && {
          images: {
            create: [{
              url: imageUrl,
              isMain: true
            }]
          }
        })
      },
      include: {
        images: true
      }
    });

    revalidatePath('/[locale]/archive');
    revalidatePath('/[locale]/admin');

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ error: 'Unable to update product' }, { status: 500 });
  }
}

// DELETE: Remove a product
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    await prisma.product.delete({
      where: { id }
    });

    revalidatePath('/[locale]/archive');
    revalidatePath('/[locale]/admin');

    return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json({ error: 'Unable to delete product' }, { status: 500 });
  }
}import { v2 as cloudinary } from 'cloudinary';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dwgkcgkn0', 
        api_key: '972395992537163', 
        api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();