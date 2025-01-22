import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export const locales = ['en', 'it'];
export type Locale = (typeof locales)[number];

// This is used by the middleware to detect supported locales
export const defaultLocale = 'en';

// Create a type for the supported locales
export type SupportedLocale = typeof defaultLocale | Locale;

// Use the request config for server-side rendering
export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  
  // Ensure that the incoming locale is valid
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});