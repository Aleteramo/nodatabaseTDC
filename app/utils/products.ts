import prisma from '@/lib/prisma';
import { Product as PrismaProduct, Image as PrismaImage, Prisma } from '@prisma/client';

export interface Image extends PrismaImage {}

export interface TempImage {
  id: string;
  url: string;
  alt?: string | null;
  isMain: boolean;
}

export interface Product extends PrismaProduct {
  images: Image[];
}

export type ProductWithImages = Product & {
  images: Image[];
};

export type ProductWithTempImages = Omit<Product, 'images'> & {
  images: (Image | TempImage)[];
};

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

export async function getAvailableProducts(): Promise<ProductWithImages[]> {
  const products = await prisma.product.findMany({
    where: {
      status: 'AVAILABLE'
    },
    include: {
      images: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  }) as (PrismaProduct & { images: Image[] })[];

  return products.map(product => ({
    ...product,
    images: product.images || []
  }));
}

export async function getSoldProducts(): Promise<ProductWithImages[]> {
  const products = await prisma.product.findMany({
    where: {
      status: 'SOLD'
    },
    include: {
      images: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  }) as (PrismaProduct & { images: Image[] })[];

  return products.map(product => ({
    ...product,
    images: product.images || []
  }));
}