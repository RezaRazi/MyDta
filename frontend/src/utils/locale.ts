// Utility function to get default locale
export const getDefaultLocale = (locale?: string | null): string => {
  return locale ?? 'fa';
};

// Utility function to check if locale is RTL
export const isRTL = (locale?: string | null): boolean => {
  return locale === 'fa' || !locale;
};

// Utility function for serverSideTranslations with default locale
export const getServerSideTranslations = async (locale?: string | null, namespaces: string[] = ['common']) => {
  const { serverSideTranslations } = await import('next-i18next/serverSideTranslations');
  return serverSideTranslations(getDefaultLocale(locale), namespaces);
};

// Utility function for getStaticProps with default locale
export const getStaticPropsWithLocale = async (locale?: string | null, namespaces: string[] = ['common']) => {
  const { serverSideTranslations } = await import('next-i18next/serverSideTranslations');
  return {
    props: {
      ...(await serverSideTranslations(getDefaultLocale(locale), namespaces)),
    },
  };
}; 