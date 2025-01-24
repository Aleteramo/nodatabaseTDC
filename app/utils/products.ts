import prisma from '@/lib/prisma';
import { Product as PrismaProduct, Image as PrismaImage, Prisma } from '@prisma/client';

interface Image extends PrismaImage {}

export interface Product extends PrismaProduct {}

export type ProductCreateInput = {
  titleEn: string;
  titleIt: string;
  descriptionEn: string;
  descriptionIt: string;
  price: number;
  status?: string;
  brand?: string;
  model?: string;
  year?: number;
  condition?: string;
  ownerId: string;
  images?: {
    create: {
      url: string;
      alt?: string;
      isMain?: boolean;
    }[];
  };
};

export function formatDate(dateString?: string | Date): string | undefined {
  if (!dateString) return undefined;
  
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export async function getAvailableProducts(): Promise<Product[]> {
  try {
    console.log('Fetching available products...');
    const availableProducts = await prisma.product.findMany({
      where: { status: 'AVAILABLE' },
      include: { 
        images: true
      },
    });
    console.log('Raw available products:', availableProducts);

    return availableProducts;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function getSoldProducts(): Promise<Product[]> {
  try {
    console.log('Fetching sold products...');
    const soldProducts = await prisma.product.findMany({
      where: { status: 'SOLD' },
      include: { 
        images: true
      },
    });
    console.log('Raw sold products:', soldProducts);

    return soldProducts;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}