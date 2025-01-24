import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth.config';
import prisma from '@/lib/prisma';
import { v2 as cloudinary } from 'cloudinary';
import { ProductWithImages } from '@/app/utils/products';

// Configura Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

interface Params {
  params: { id: string };
}

export async function PUT(req: Request, { params }: Params): Promise<Response> {
  try {
    console.log('PUT request received for product:', params.id);
    
    const session = await getServerSession(authOptions);
    console.log('Session:', session);

    if (!session?.user || session.user.role !== "ADMIN") {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const productId = params.id;
    const formData = await req.formData();
    console.log('Received form data fields:', Array.from(formData.entries()));
    
    const updateData: any = {};
    
    // Handle text fields
    if (formData.has('titleEn')) updateData.titleEn = formData.get('titleEn');
    if (formData.has('titleIt')) updateData.titleIt = formData.get('titleIt');
    if (formData.has('descriptionEn')) updateData.descriptionEn = formData.get('descriptionEn');
    if (formData.has('descriptionIt')) updateData.descriptionIt = formData.get('descriptionIt');
    if (formData.has('price')) {
      const price = Number(formData.get('price'));
      if (!isNaN(price)) {
        updateData.price = price;
      }
    }
    if (formData.has('status')) updateData.status = formData.get('status');
    if (formData.has('brand')) updateData.brand = formData.get('brand') || null;
    if (formData.has('model')) updateData.model = formData.get('model') || null;
    if (formData.has('year')) {
      const year = parseInt(formData.get('year') as string, 10);
      if (!isNaN(year)) {
        updateData.year = year;
      }
    }
    if (formData.has('condition')) updateData.condition = formData.get('condition') || null;
    
    console.log('Update data:', updateData);

    // Handle image file
    const imageFile = formData.get('image') as File | null;
    if (imageFile) {
      console.log('Processing image file:', imageFile.name);
      
      try {
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        const uploadResponse = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            {
              folder: 'orologi',
              resource_type: 'image',
              transformation: [
                { width: 800, height: 800, crop: 'fill', gravity: 'auto' },
                { quality: 'auto', fetch_format: 'auto' }
              ]
            },
            (error, result) => {
              if (error) {
                console.error('Cloudinary upload error:', error);
                reject(error);
              } else {
                resolve(result);
              }
            }
          ).end(buffer);
        });

        console.log('Cloudinary upload response:', uploadResponse);
        const cloudinaryUrl = (uploadResponse as any).secure_url;

        // Update images in database
        await prisma.image.deleteMany({
          where: { productId }
        });

        await prisma.image.create({
          data: {
            url: cloudinaryUrl,
            alt: `${updateData.titleEn || 'Product'} image`,
            isMain: true,
            productId
          }
        });
      } catch (imageError) {
        console.error('Image processing error:', imageError);
        throw imageError;
      }
    }

    // Update product
    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: updateData,
      include: { images: true }
    });

    console.log('Updated product:', updatedProduct);

    return new Response(JSON.stringify(updatedProduct), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error('Error in PUT route:', error);
    return new Response(
      JSON.stringify({ 
        message: error instanceof Error ? error.message : 'Failed to update product',
        details: error
      }), 
      { 
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}