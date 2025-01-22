import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

// Import messages statically with type assertion
import enMessages from '@/messages/en.json';
import itMessages from '@/messages/it.json';

// Import global components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NextAuthProvider from './components/providers/SessionProvider';
import WhatsAppButton from './components/ui/WhatsAppButton';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const messages = {
  en: enMessages,
  it: itMessages
} as const;

type Locale = keyof typeof messages;

export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Validate locale with type narrowing
  if (!(locale in messages)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="bg-black text-white">
        <NextIntlClientProvider 
          messages={messages[locale as Locale]} 
          locale={locale}
        >
          <NextAuthProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </NextAuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// For static export
export function generateStaticParams() {
  return Object.keys(messages).map(locale => ({ locale }));
}