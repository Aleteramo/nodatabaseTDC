'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Product, ProductWithImages, ProductWithTempImages, TempImage } from '@/app/utils/products';
import { useTranslations } from 'next-intl';
import { useSession } from 'next-auth/react';
import { GlareCard } from './glare-card';

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
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

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

    useEffect(() => {
        if (!isAdmin && refElement.current) {
            const handleMouseMove = (e: MouseEvent) => {
                const card = refElement.current;
                if (!card) return;

                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = -(x - centerX) / 20;

                setRotation({ x: rotateX, y: rotateY });
            };

            const handleMouseLeave = () => {
                setRotation({ x: 0, y: 0 });
            };

            const element = refElement.current;
            element.addEventListener('mousemove', handleMouseMove);
            element.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                element.removeEventListener('mousemove', handleMouseMove);
                element.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [isAdmin]);

    const handleInputChange = (name: string, value: string) => {
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

    const mainImage = editedProduct.images?.find(img => img.isMain) || editedProduct.images?.[0];
    const imageUrl = mainImage?.url || '/images/placeholder.jpg';
    const imageAlt = mainImage?.alt || (locale === 'en' ? editedProduct.titleEn : editedProduct.titleIt) || '';

    return (
        <div className="relative">
            {isEditing ? (
                <div className="p-6 flex-1 flex flex-col bg-black border border-gold/30 rounded-lg">
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

                    <div className="space-y-4 mt-4">
                        <div>
                            <label className="block text-gold mb-2" htmlFor="titleEn">
                                {t('titleEn')}
                            </label>
                            <input
                                type="text"
                                id="titleEn"
                                value={editedProduct.titleEn || ''}
                                onChange={(e) => handleInputChange('titleEn', e.target.value)}
                                className="w-full p-2 bg-black border border-gold/30 rounded text-gold focus:border-gold focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gold mb-2" htmlFor="titleIt">
                                {t('titleIt')}
                            </label>
                            <input
                                type="text"
                                id="titleIt"
                                value={editedProduct.titleIt || ''}
                                onChange={(e) => handleInputChange('titleIt', e.target.value)}
                                className="w-full p-2 bg-black border border-gold/30 rounded text-gold focus:border-gold focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gold mb-2" htmlFor="descriptionEn">
                                {t('descriptionEn')}
                            </label>
                            <textarea
                                id="descriptionEn"
                                value={editedProduct.descriptionEn || ''}
                                onChange={(e) => handleInputChange('descriptionEn', e.target.value)}
                                rows={3}
                                className="w-full p-2 bg-black border border-gold/30 rounded text-gold focus:border-gold focus:outline-none resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gold mb-2" htmlFor="descriptionIt">
                                {t('descriptionIt')}
                            </label>
                            <textarea
                                id="descriptionIt"
                                value={editedProduct.descriptionIt || ''}
                                onChange={(e) => handleInputChange('descriptionIt', e.target.value)}
                                rows={3}
                                className="w-full p-2 bg-black border border-gold/30 rounded text-gold focus:border-gold focus:outline-none resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gold mb-2" htmlFor="price">
                                {t('price')}
                            </label>
                            <input
                                type="number"
                                id="price"
                                value={editedProduct.price || ''}
                                onChange={(e) => handlePriceChange(e)}
                                className="w-full p-2 bg-black border border-gold/30 rounded text-gold focus:border-gold focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gold mb-2" htmlFor="status">
                                {t('status')}
                            </label>
                            <select
                                id="status"
                                value={editedProduct.status}
                                onChange={(e) => handleStatusChange(e)}
                                className="w-full p-2 bg-black border border-gold/30 rounded text-gold focus:border-gold focus:outline-none"
                            >
                                <option value="AVAILABLE">{t('available')}</option>
                                <option value="SOLD">{t('sold')}</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gold mb-2" htmlFor="image">
                                {t('image')}
                            </label>
                            <input
                                ref={imageInputRef}
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="w-full p-2 bg-black border border-gold/30 rounded text-gold focus:border-gold focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gold/10 file:text-gold hover:file:bg-gold/20"
                            />
                        </div>

                        <div className="flex justify-end space-x-4 mt-6">
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2 rounded-md text-gold border border-gold font-semibold hover:bg-gold/10 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50"
                            >
                                {t('cancel')}
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleSubmit(e);
                                }}
                                disabled={isSaving}
                                className={cn(
                                    "px-4 py-2 rounded-md bg-gold text-black font-semibold hover:bg-gold/90 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50",
                                    isSaving && "opacity-50 cursor-not-allowed"
                                )}
                            >
                                {isSaving ? t('saving') + "..." : t('save')}
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
                </div>
            ) : isAdmin ? (
                <div className="bg-black border border-gold/30 rounded-lg overflow-hidden hover:border-gold/60 transition-all duration-300">
                    <div className="flex flex-col h-full">
                        <div className="relative w-full h-64 bg-gray-800 overflow-hidden">
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                priority
                                width={500}
                                height={300}
                                style={{ objectFit: 'contain' }}
                                className="w-full h-full transition-transform duration-300"
                            />
                            {/* Badge di stato */}
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
                                    {product.status === 'SOLD' ? t('sold') : t('available')}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <h2 className="text-xl font-bold text-gold mb-2">
                                {locale === 'en' ? product.titleEn : product.titleIt}
                            </h2>
                            
                            <div 
                                className={cn(
                                    "text-gold/60 text-sm mb-3 relative transition-all duration-300 ease-in-out cursor-pointer",
                                    !isDescriptionExpanded && "max-h-[60px] overflow-hidden"
                                )}
                                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                            >
                                <p>{locale === 'en' ? product.descriptionEn : product.descriptionIt}</p>
                                {!isDescriptionExpanded && (
                                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent" />
                                )}
                            </div>

                            <div className="w-full h-px bg-gold/20 my-4" />

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
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-black border border-gold/30 rounded-lg overflow-hidden hover:border-gold/60 transition-all duration-300">
                    <div className="flex flex-col h-full">
                        <div className="relative w-full h-64 bg-gray-800 overflow-hidden group">
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                priority
                                width={500}
                                height={300}
                                style={{ objectFit: 'contain' }}
                                className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Improved status badge */}
                            <div className="absolute top-0 right-0 p-4">
                                <div className={cn(
                                    "relative flex items-center px-4 py-1.5 rounded-full text-sm font-medium",
                                    "before:absolute before:inset-0 before:rounded-full before:backdrop-blur-md before:backdrop-saturate-150 before:-z-10",
                                    product.status === 'SOLD'
                                        ? "text-white before:bg-red-500/30 ring-1 ring-red-400/50"
                                        : "text-white before:bg-emerald-500/30 ring-1 ring-emerald-400/50"
                                )}>
                                    <span className={cn(
                                        "w-1.5 h-1.5 rounded-full mr-2",
                                        product.status === 'SOLD' 
                                            ? "bg-red-400 animate-pulse" 
                                            : "bg-emerald-400 animate-[pulse_2s_ease-in-out_infinite]"
                                    )} />
                                    {product.status === 'SOLD' ? t('sold') : t('available')}
                                </div>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <h2 className="text-xl font-bold text-gold mb-2">
                                {locale === 'en' ? product.titleEn : product.titleIt}
                            </h2>
                            
                            <div 
                                className={cn(
                                    "text-gold/60 text-sm mb-3 relative transition-all duration-300 ease-in-out cursor-pointer",
                                    !isDescriptionExpanded && "max-h-[60px] overflow-hidden"
                                )}
                                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                            >
                                <p>{locale === 'en' ? product.descriptionEn : product.descriptionIt}</p>
                                {!isDescriptionExpanded && (
                                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent" />
                                )}
                            </div>

                            <div className="w-full h-px bg-gold/20 my-4" />

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
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}