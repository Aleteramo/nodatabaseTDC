import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18n';
import ClientAbout from './ClientAbout';

type Props = {
  params: { locale: Locale }
};

// Add static params generation
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}

export async function generateMetadata({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations({ locale, namespace: 'About' });
  return {
    title: t('meta.title'),
    description: t('meta.description')
  };
}

export default async function About({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('About');

  const translations = {
    title: t('title'),
    heritage: {
      title: t('heritage.title'),
      description: t('heritage.description')
    },
    expertise: {
      title: t('expertise.title'),
      description: t('expertise.description')
    },
    values: {
      1: {
        title: t('values.1.title'),
        description: t('values.1.description')
      },
      2: {
        title: t('values.2.title'),
        description: t('values.2.description')
      },
      3: {
        title: t('values.3.title'),
        description: t('values.3.description')
      }
    }
  };

  return <ClientAbout translations={translations} />;
}