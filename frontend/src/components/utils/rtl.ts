import { useRouter } from 'next/router';

export function useRTL() {
  const { locale } = useRouter();
  return locale === 'fa';
}

export function getTextAlign(isRTL: boolean) {
  return isRTL ? 'right' : 'left';
}

export function getDirection(isRTL: boolean) {
  return isRTL ? 'rtl' : 'ltr';
} 