import { getRequestConfig } from 'next-intl/server';
import type { IntlConfig } from 'next-intl';

// Define supported locales
export const locales = ['en', 'it'];
export type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => {
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
          currency: locale === 'it' ? 'EUR' : 'GBP'
        }
      }
    },
    onError: (error: unknown) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('[i18n error]', error);
      }
    }
  };

  return runtimeConfig;
});

import createMiddleware from 'next-intl/middleware';

export const middleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};