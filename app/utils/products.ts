import prisma from '@/lib/prisma';

// Define the Card type based on your Prisma schema
type CardStatus = 'AVAILABLE' | 'SOLD' | 'RESERVED';

interface Card {
  id: string;
  titleEn: string;
  titleIt: string;
  mainImage: string | null;
  additionalImages: string[];
  descriptionEn: string | null;
  descriptionIt: string | null;
  price: number | null;
  status: CardStatus;
  updatedAt: Date;
  brand: string | null;
  model: string | null;
  year: number | null;
  condition: string | null;
  createdAt: Date;
}

export interface Product {
  id: string;
  translationKey: string;
  image: string;
  status?: 'available' | 'sold';
  soldDate?: string;
}

export const formatDate = (dateString?: string | Date): string | undefined => {
  if (!dateString) return undefined;

  try {
    const date = dateString instanceof Date ? dateString : new Date(dateString);
    return date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  } catch (error) {
    console.error('Date formatting error:', error);
    return undefined;
  }
};

export const products: Product[] = [
  {
    id: '1',
    translationKey: '1', // corresponds to Products.watches.1
    image: '/images/watches/eduorologi1.svg',
    status: 'available'
  },
  {
    id: '2',
    translationKey: '2', // corresponds to Products.watches.2
    image: '/images/watches/eduorologi1.svg',
    status: 'available'
  },
  {
    id: '3',
    translationKey: '3', // corresponds to Products.watches.3
    image: '/images/watches/eduorologi1.svg',
    status: 'available'
  }
];

export const soldProducts: Product[] = [
  {
    id: '4',
    translationKey: '4', // corresponds to Products.watches.4
    image: '/images/watches/eduorologi1.svg',
    status: 'sold',
    soldDate: '2023-12-15'
  },
  {
    id: '5',
    translationKey: '5', // corresponds to Products.watches.5
    image: '/images/watches/eduorologi1.svg',
    status: 'sold',
    soldDate: '2023-11-30'
  }
];

export function getAvailableProducts(): Product[] {
  return products;
}

export function getSoldProducts(): Product[] {
  return soldProducts;
}