// app/[locale]/contatti/page.tsx
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18n';
import { ContactForm } from '@/app/components/ContactForm';

type Props = {
  params: { locale: Locale }
};

// Generate static params for all supported locales
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}

export async function generateMetadata({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations({ locale, namespace: 'Contact' });
  return {
    title: t('meta.title'),
    description: t('meta.description')
  };
}

export default async function ContattiPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('Contact');
  
  const translations = {
    title: t('title'),
    subtitle: t('subtitle'),
    success: t('success.message'),
    form: {
      name: t('form.name'),
      email: t('form.email'),
      message: t('form.message'),
      submit: t('form.submit')
    }
  };

  return <ContactForm translations={translations} />;
}