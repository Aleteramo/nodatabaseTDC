import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from '../i18n';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: locale === 'it' ? 'Europe/Rome' : 'Europe/London'
  };
});