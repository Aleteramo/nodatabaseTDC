"use client"; // Add this line at the top

import React, { useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ProductWithImages } from '@/app/utils/products';
import { GlareCard } from './glare-card'; // Ensure the import path is correct

interface ArchiveProductCardProps {
    product: ProductWithImages;
    locale: string;
}

const ArchiveProductCard: React.FC<ArchiveProductCardProps> = ({ product, locale }) => {
    const refElement = useRef<HTMLDivElement>(null);

    return (
        <GlareCard className="relative">
            <div className="bg-gray-800 border border-gold/30 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-[400px]">
                <div className="flex flex-col h-full">
                    <div className="relative w-full h-64 bg-gray-700 overflow-hidden">
                        <Image
                            src={product.images[0]?.url || '/images/placeholder.jpg'}
                            alt={product.titleEn}
                            priority
                            width={500}
                            height={300}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute top-4 right-4">
                            <span className={cn(
                                "inline-flex items-center px-4 py-1 rounded-full text-sm font-medium shadow-lg backdrop-blur-md",
                                product.status === 'SOLD'
                                    ? "bg-red-500/80 text-white ring-1 ring-red-500"
                                    : "bg-emerald-500/80 text-white ring-1 ring-emerald-500"
                            )}>
                                <span className={cn(
                                    "w-2 h-2 rounded-full mr-2 animate-pulse",
                                    product.status === 'SOLD' ? "bg-red-200" : "bg-emerald-200"
                                )} />
                                {product.status === 'SOLD' ? 'Sold' : 'Available'}
                            </span>
                        </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                        <h2 className="text-xl font-bold text-gold mb-2">
                            {locale === 'en' ? product.titleEn : product.titleIt}
                        </h2>
                        <p className="text-gold/60 text-sm mb-3 line-clamp-2">
                            {locale === 'en' ? product.descriptionEn : product.descriptionIt}
                        </p>
                        <span className="text-gold font-semibold">
                            {product.price ? `€${product.price}` : 'Price on request'}
                        </span>
                    </div>
                </div>
            </div>
        </GlareCard>
    );
};

export default ArchiveProductCard;