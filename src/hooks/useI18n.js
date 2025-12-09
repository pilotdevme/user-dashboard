import en from '@/locales/en.json';
import fr from '@/locales/fr.json';

export default function useI18n(locale) {
  if (locale === 'fr') return fr;
  return en;
}
