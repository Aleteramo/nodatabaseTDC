'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Product, ProductWithImages, ProductWithTempImages, TempImage } from '@/app/utils/products';
import { useTranslations } from 'next-intl';
import { useSession } from 'next-auth/react';

interface ProductCardProps {
    product: ProductWithImages;
    locale: string;
    isAdmin?: boolean;
    onProductUpdate?: (updatedProduct: Product) => void;
    onProductDelete?: (productId: string) => void;
}

export function ProductCard({ product, locale, isAdmin = false, onProductUpdate, onProductDelete }: ProductCardProps) {
    const router = useRouter();
    const t = useTranslations('Products');
    const { data: session } = useSession();
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState<ProductWithTempImages>({
        ...product,
        images: product.images || []
    });
    const [isSaving, setIsSaving] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [soldDateFormatted, setSoldDateFormatted] = useState<string | null>(null);
    const [newImageFile, setNewImageFile] = useState<File | null>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const refElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setEditedProduct({
            ...product,
            images: product.images || []
        });
        setErrorMessage(null);
        setNewImageFile(null);
        if (imageInputRef.current) {
            imageInputRef.current.value = '';
        }
    }, [product]);

    useEffect(() => {
        if (product.status === 'SOLD') {
            const date = new Date(product.updatedAt!);
            const formatted = new Intl.DateTimeFormat(locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }).format(date);
            setSoldDateFormatted(formatted);
        } else {
            setSoldDateFormatted(null);
        }
    }, [product.status, product.updatedAt, locale]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEditedProduct(prev => ({ ...prev, [name]: value }));
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const parsedPrice = parseFloat(value);
        setEditedProduct(prev => ({ ...prev, [name]: isNaN(parsedPrice) ? undefined : parsedPrice }));
    };

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEditedProduct(prev => ({
            ...prev,
            status: value as any
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setNewImageFile(file);
            
            const previewUrl = URL.createObjectURL(file);
            setEditedProduct(prev => ({
                ...prev,
                images: [...(prev.images || []), { id: 'preview', url: previewUrl, alt: '', isMain: true }]
            }));
        }
    };

    useEffect(() => {
        return () => {
            const previewImage = editedProduct.images?.find(img => img.id === 'preview');
            if (previewImage) {
                URL.revokeObjectURL(previewImage.url);
            }
        };
    }, [editedProduct.images]);

    const handleCancel = () => {
        setIsEditing(false);
        setErrorMessage(null);
        // Revert to original product data
        setEditedProduct({
            ...product,
            images: product.images || []
        });
        setNewImageFile(null);
        if (imageInputRef.current) {
            imageInputRef.current.value = '';
        }
        // Cleanup any preview URL
        const previewImage = editedProduct.images?.find(img => img.id === 'preview');
        if (previewImage) {
            URL.revokeObjectURL(previewImage.url);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setErrorMessage(null);

        try {
            const formData = new FormData();
            
            // Aggiungi i campi di testo
            formData.append('titleEn', editedProduct.titleEn);
            formData.append('titleIt', editedProduct.titleIt);
            formData.append('descriptionEn', editedProduct.descriptionEn);
            formData.append('descriptionIt', editedProduct.descriptionIt);
            formData.append('price', editedProduct.price.toString());
            formData.append('status', editedProduct.status);
            if (editedProduct.brand) formData.append('brand', editedProduct.brand);
            if (editedProduct.model) formData.append('model', editedProduct.model);
            if (editedProduct.year) formData.append('year', editedProduct.year.toString());
            if (editedProduct.condition) formData.append('condition', editedProduct.condition);
            
            // Aggiungi la nuova immagine se presente
            if (newImageFile) {
                formData.append('image', newImageFile);
            }

            const response = await fetch(`/api/admin/products/${editedProduct.id}`, {
                method: 'PUT',
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData?.message || `Failed to update product: ${response.status}`);
            }

            const updatedProductFromServer = await response.json();
            
            // Aggiorna lo stato locale
            setEditedProduct({
                ...updatedProductFromServer,
                images: updatedProductFromServer.images || []
            });
            
            // Notifica il componente padre
            if (onProductUpdate) {
                onProductUpdate(updatedProductFromServer);
            }
            
            // Resetta lo stato
            setIsEditing(false);
            setNewImageFile(null);
            if (imageInputRef.current) {
                imageInputRef.current.value = '';
            }

            // Forza il refresh della pagina
            router.refresh();
        } catch (error: any) {
            console.error("Error updating product:", error);
            setErrorMessage(error.message || 'Failed to update product');
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async () => {
        setIsSaving(true); 
        setErrorMessage(null);
        try {
            const response = await fetch(`/api/admin/products/${product.id}`, { 
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData?.message || `Failed to delete product: ${response.status}`);
            }

            onProductDelete?.(product.id); 
            setIsEditing(false);


        } catch (error: any) {
            console.error("Error deleting product:", error);
            setErrorMessage(error.message);
        } finally {
            setIsSaving(false);
        }
    };

    const mainImage = editedProduct.images.find(img => img.isMain) || editedProduct.images[0];
    const imageUrl = mainImage?.url || '/placeholder.jpg';
    const imageAlt = mainImage?.alt || locale === 'en' ? editedProduct.titleEn : editedProduct.titleIt;

    return (
        <div
            ref={refElement}
            className="bg-black border border-gold/30 rounded-lg overflow-hidden hover:border-gold/60 transition-all duration-300"
        >
            {isEditing ? (
                <div className="p-6 flex-1 flex flex-col">
                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                    <div className="relative w-full h-64 bg-gray-800">
                        <Image
                            src={imageUrl}
                            alt={imageAlt}
                            fill
                            className="w-full h-full object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor={`titleEn-${product.id}`} className="block text-sm font-medium text-gold">English Title</label>
                        <input
                            type="text"
                            id={`titleEn-${product.id}`}
                            name="titleEn"
                            value={editedProduct.titleEn}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full bg-black border border-gold/50 rounded-md text-gold focus:border-gold focus:ring-1 focus:ring-gold focus:ring-opacity-50"
                        />
                        
                        <label htmlFor={`titleIt-${product.id}`} className="block text-sm font-medium text-gold mt-4">Italian Title</label>
                        <input
                            type="text"
                            id={`titleIt-${product.id}`}
                            name="titleIt"
                            value={editedProduct.titleIt}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full bg-black border border-gold/50 rounded-md text-gold focus:border-gold focus:ring-1 focus:ring-gold focus:ring-opacity-50"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor={`price-${product.id}`} className="block text-sm font-medium text-gold">Price</label>
                        <input
                            type="number"
                            id={`price-${product.id}`}
                            name="price"
                            value={editedProduct.price !== undefined ? editedProduct.price.toString() : ''}
                            onChange={handlePriceChange}
                            className="mt-1 p-2 block w-full rounded-md border-gold/50 shadow-sm focus:border-gold focus:ring-gold bg-black text-gold sm:text-sm"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor={`status-${product.id}`} className="block text-sm font-medium text-gold">Status</label>
                        <select
                            id={`status-${product.id}`}
                            name="status"
                            value={editedProduct.status || 'AVAILABLE'}
                            onChange={handleStatusChange}
                            className="mt-1 p-2 block w-full rounded-md border-gold/50 shadow-sm focus:border-gold focus:ring-gold bg-black text-gold sm:text-sm"
                        >
                            <option value="AVAILABLE">{t('available')}</option>
                            <option value="SOLD">{t('sold')}</option>
                        </select>
                    </div>
                    {/* Input per l'immagine */}
                    <div className="flex flex-col mt-2">
                        <label htmlFor={`image-${product.id}`} className="block text-sm font-medium text-gold">Image</label>
                        <input
                            ref={imageInputRef}
                            type="file"
                            id={`image-${product.id}`}
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-1 p-2 block w-full rounded-md border-gold/50 shadow-sm focus:border-gold focus:ring-gold bg-black text-gold sm:text-sm"
                        />
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleSubmit(e);
                            }}
                            disabled={isSaving}
                            className={cn(
                                "px-4 py-2 rounded-md bg-gold text-black font-semibold hover:bg-gold/80 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50",
                                isSaving && "opacity-50 cursor-not-allowed"
                            )}
                        >
                            {isSaving ? t('saving') + "..." : t('save')}
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCancel();
                            }}
                            disabled={isSaving}
                            className="px-4 py-2 rounded-md text-gold border border-gold font-semibold hover:bg-gold/10 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {t('cancel')}
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete();
                            }}
                            disabled={isSaving}
                            className="px-4 py-2 rounded-md text-red-500 border border-red-500 font-semibold hover:bg-red-500/10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {t('delete')}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col h-full">
                    <div className="relative w-full h-64 bg-gray-800">
                        <Image
                            src={imageUrl}
                            alt={imageAlt}
                            priority
                            width={500}
                            height={300}
                            style={{ objectFit: 'contain' }}
                            className="w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                        <h2 className="text-xl font-bold text-gold mb-2">
                            {locale === 'en' ? product.titleEn : product.titleIt}
                        </h2>
                        
                        <div className="flex justify-between items-start mb-2">
                            <span className={cn(
                                "inline-block px-3 py-1 rounded-full text-sm",
                                product.status === 'SOLD'
                                    ? "bg-red-500/20 text-red-300"
                                    : "bg-green-500/20 text-green-300"
                            )}>
                                {product.status === 'SOLD' ? t('sold') : t('available')}
                            </span>
                        </div>

                        <div className="text-gold/60 text-sm mb-3">
                            <p>{locale === 'en' ? product.descriptionEn : product.descriptionIt}</p>
                        </div>

                        <div className="flex justify-between items-center mt-auto">
                            <span className="text-gold font-semibold">
                                {product.price 
                                    ? new Intl.NumberFormat(locale, {
                                        style: 'currency',
                                        currency: 'EUR',
                                        maximumFractionDigits: 0
                                    }).format(product.price)
                                    : t('priceOnRequest')}
                            </span>
                            {soldDateFormatted && (
                                <span className="text-gold/40 text-sm">
                                    {soldDateFormatted}
                                </span>
                            )}
                        </div>
                        
                        {isAdmin && (
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsEditing(true);
                                    }}
                                    className="px-4 py-2 rounded-md text-gold border border-gold font-semibold hover:bg-gold/10 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50"
                                >
                                    {t('edit')}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}