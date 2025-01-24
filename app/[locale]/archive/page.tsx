import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ProductCard } from '../components/ui/product-card';
import { getSoldProducts, getAvailableProducts, ProductWithImages } from '@/app/utils/products';
import { locales, type Locale } from '@/i18n';

// Disable static page generation
export const revalidate = 0;
export const dynamic = 'force-dynamic';

type Props = {
 params: { locale: Locale }
};

export function generateStaticParams() {
 return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
 unstable_setRequestLocale(locale);
 const t = await getTranslations({ locale, namespace: 'Archive' });
 return {
   title: t('meta.title'),
   description: t('meta.description')
 };
}

export default async function ArchivePage({ params: { locale } }: Props) {
 unstable_setRequestLocale(locale);
 const t = await getTranslations('Archive');

 const soldPieces: ProductWithImages[] = await getSoldProducts();
 const availablePieces: ProductWithImages[] = await getAvailableProducts();
 const allPieces: ProductWithImages[] = [...availablePieces, ...soldPieces];

 console.log('DEBUG - Query results:', { 
  soldPieces, 
  availablePieces,
  allPieces,
  soldCount: soldPieces.length,
  availableCount: availablePieces.length
});

console.log({
  soldPieces,
  availablePieces,
  allPieces,
  soldCount: soldPieces.length,
  availableCount: availablePieces.length
});
 return (
   <div className="min-h-screen bg-black">
     <section className="relative h-[40vh] overflow-hidden bg-gradient-to-b from-black/95 to-black/90">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-black/90 to-black" />
       <div className="absolute inset-0 flex items-center justify-center">
         <div className="text-center">
           <h1 className="text-5xl md:text-6xl font-bold text-gold mb-4">
             {t('title')}
           </h1>
           <p className="text-gold/80 text-xl max-w-2xl mx-auto px-4">
             {t('description')}
           </p>
         </div>
       </div>
     </section>

     <div className="container mx-auto px-4 py-12">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
         {allPieces.map((piece) => (
           <ProductCard 
             key={piece.id} 
             product={piece} 
             locale={locale}
             isAdmin={false}
           />
         ))}
       </div>
     </div>
   </div>
 );
}