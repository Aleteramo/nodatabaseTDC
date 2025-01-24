'use client';

import { useState, useEffect } from 'react';
import { ProductCard } from '@/app/[locale]/components/ui/product-card';
import { Product } from '@/app/utils/products';
import { useTranslations } from 'next-intl';

interface AdminDashboardProps {
  locale: string;
}

type ProductFormData = {
  titleEn: string;
  titleIt: string;
  descriptionEn: string;
  descriptionIt: string;
  price: number;
  status: string;
  brand?: string;
  model?: string;
  year?: number;
  condition?: string;
  imageUrl?: string;
}

export default function AdminDashboard({ locale }: AdminDashboardProps) {
  const t = useTranslations('Admin');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<ProductFormData>({
    titleEn: '',
    titleIt: '',
    descriptionEn: '',
    descriptionIt: '',
    price: 0,
    status: 'AVAILABLE'
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError('Error loading products');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProductUpdate = async (updatedProduct: Product) => {
    try {
      const response = await fetch('/api/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) throw new Error('Failed to update product');
      await fetchProducts();
    } catch (error) {
      setError('Error updating product');
      console.error(error);
    }
  };

  const handleProductDelete = async (productId: string) => {
    try {
      const response = await fetch(`/api/products?id=${productId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete product');
      await fetchProducts();
    } catch (error) {
      setError('Error deleting product');
      console.error(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : 
              name === 'year' ? parseInt(value, 10) : 
              value
    }));
  };

  const handleCreateProduct = async () => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to create product');
      await fetchProducts();
      setIsCreating(false);
      setFormData({
        titleEn: '',
        titleIt: '',
        descriptionEn: '',
        descriptionIt: '',
        price: 0,
        status: 'AVAILABLE'
      });
    } catch (error) {
      setError('Error creating product');
      console.error(error);
    }
  };

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{t('dashboard')}</h1>
      
      <button
        onClick={() => setIsCreating(!isCreating)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isCreating ? t('cancel') : t('createProduct')}
      </button>

      {isCreating && (
        <div className="bg-white p-4 rounded-lg shadow mb-4 space-y-4">
          <input
            type="text"
            name="titleEn"
            placeholder={t('titleEn')}
            value={formData.titleEn}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="titleIt"
            placeholder={t('titleIt')}
            value={formData.titleIt}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="descriptionEn"
            placeholder={t('descriptionEn')}
            value={formData.descriptionEn}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="descriptionIt"
            placeholder={t('descriptionIt')}
            value={formData.descriptionIt}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="price"
            placeholder={t('price')}
            value={formData.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="brand"
            placeholder={t('brand')}
            value={formData.brand || ''}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="model"
            placeholder={t('model')}
            value={formData.model || ''}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="year"
            placeholder={t('year')}
            value={formData.year || ''}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="condition"
            placeholder={t('condition')}
            value={formData.condition || ''}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="imageUrl"
            placeholder={t('imageUrl')}
            value={formData.imageUrl || ''}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleCreateProduct}
            className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            {t('create')}
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            locale={locale}
            isAdmin={true}
            onProductUpdate={handleProductUpdate}
            onProductDelete={handleProductDelete}
          />
        ))}
      </div>
    </div>
  );
}