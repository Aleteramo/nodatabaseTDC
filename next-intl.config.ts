import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'it'] as const;
export const defaultLocale = 'en';

export const AppPathnames = {
  '/': '/',
  '/archive': '/archive',
  '/login': '/login',
} satisfies Pathnames<typeof locales>;

export default {
  locales,
  defaultLocale,
  localePrefix: 'always',
  pathnames: AppPathnames
};