import { getRequestConfig } from 'next-intl/server';
import type { IntlConfig } from 'next-intl';
import { locales, defaultLocale } from './i18n';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  
  // Ensure that the incoming locale is valid
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale; 
  }
  
  const runtimeConfig: IntlConfig = {
    locale,
    timeZone: locale === 'it' ? 'Europe/Rome' : 'Europe/London',
    formats: {
      dateTime: {
        short: {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }
      },
      number: {
        currency: {
          style: 'currency',
          currency: 'EUR'
        }
      }
    },
    onError(error: unknown) {
      if (process.env.NODE_ENV === 'development') {
        console.error(error);
      }
    }
  };

  return runtimeConfig;
});

import createMiddleware from 'next-intl/middleware';

export const middleware = createMiddleware({
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale,
  
  // Always show the locale prefix in the URL
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(it|en)/:path*']
};