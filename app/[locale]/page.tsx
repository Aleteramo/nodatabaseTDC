import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

type Props = {
  params: { locale: string }
};

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  redirect(`/${locale}/archive`);
}
