// app/[locale]/admin/page.tsx
import AdminDashboard from '@/app/components/AdminDashboard';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n';

export default async function AdminPage({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const session = await getServerSession();
  if (!session?.user) redirect(`/${locale}/login`);
  return <AdminDashboard locale={locale} />;
}