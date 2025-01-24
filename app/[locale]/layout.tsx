import { NextIntlClientProvider } from 'next-intl';
import { SpeedInsights } from "@vercel/speed-insights/next"; // Import SpeedInsights
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server'; // Import unstable_setRequestLocale

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

  unstable_setRequestLocale(locale); // Set the request locale

  return (
    <html lang={locale} className="bg-black">
      <body className="min-h-screen bg-black text-white">
        <NextIntlClientProvider
          messages={messages[locale as Locale]}
          locale={locale}
        >
          <NextAuthProvider>
            <SpeedInsights /> {/* Add SpeedInsights here */}
            <div className="flex flex-col min-h-screen bg-black">
              <Header />
              <main className="flex-grow bg-black pb-16 sm:pb-0">{children}</main>
              <Footer />
              <WhatsAppButton />
            </div>
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