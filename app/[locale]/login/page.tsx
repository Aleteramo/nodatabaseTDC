import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18n';
import { LoginForm } from '@/app/components/LoginForm';

type Props = {
  params: { locale: Locale }
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}

export async function generateMetadata({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Login' });
  return {
    title: t('meta.title'),
    description: t('meta.description')
  };
}

export default async function LoginPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Login');
  
  const translations = {
    title: t('title'),
    subtitle: t('subtitle'),
    form: {
      email: t('form.email'),
      password: t('form.password'),
      submit: t('form.submit')
    }
  };

  return <LoginForm translations={translations} />;
}