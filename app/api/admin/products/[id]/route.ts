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
  console.log('PUT request received for product:', params.id);
  
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "ADMIN") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const productId = params.id;
  const formData = await req.formData();
  console.log('Received form data fields:', Array.from(formData.keys()));
  
  try {
    const updateData: any = {};
    
    // Handle text fields
    if (formData.has('titleEn')) updateData.titleEn = formData.get('titleEn');
    if (formData.has('titleIt')) updateData.titleIt = formData.get('titleIt');
    if (formData.has('descriptionEn')) updateData.descriptionEn = formData.get('descriptionEn');
    if (formData.has('descriptionIt')) updateData.descriptionIt = formData.get('descriptionIt');
    if (formData.has('price')) updateData.price = Number(formData.get('price'));
    if (formData.has('status')) {
      const status = formData.get('status') as string;
      updateData.status = status;
    }
    if (formData.has('brand')) updateData.brand = formData.get('brand') as string || null;
    if (formData.has('model')) updateData.model = formData.get('model') as string || null;
    if (formData.has('year')) updateData.year = formData.get('year') ? parseInt(formData.get('year') as string, 10) : null;
    if (formData.has('condition')) updateData.condition = formData.get('condition') as string || null;
    
    // Handle image file
    const imageFile = formData.get('image') as File | null;
    if (imageFile) {
      console.log('Processing image file:', imageFile.name);
      
      // Converti il File in un buffer
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // Carica l'immagine su Cloudinary
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
            if (error) reject(error);
            else resolve(result);
          }
        ).end(buffer);
      });

      const cloudinaryUrl = (uploadResponse as any).secure_url;
      
      // Delete existing images from database
      await prisma.image.deleteMany({
        where: {
          productId: productId
        }
      });

      // Create new image record
      await prisma.image.create({
        data: {
          url: cloudinaryUrl,
          alt: `${updateData.titleEn || 'Product'} image`,
          isMain: true,
          product: {
            connect: {
              id: productId
            }
          }
        }
      });

      console.log('Image uploaded to Cloudinary:', cloudinaryUrl);
    }

    const updatedProduct: ProductWithImages = await prisma.product.update({
      where: { id: productId },
      data: updateData,
      include: {
        images: true
      }
    });

    console.log('Product updated successfully:', updatedProduct);
    return new Response(JSON.stringify({ message: "Product updated successfully", product: updatedProduct }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error updating product:", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}