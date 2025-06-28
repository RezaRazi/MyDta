import { createGetInitialProps } from '@mantine/next';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await getInitialProps(ctx);
    const { locale } = ctx;
    const dir = locale === 'fa' || !locale ? 'rtl' : 'ltr';
    
    return {
      ...initialProps,
      locale: locale || 'fa',
      dir,
    };
  }

  render() {
    const { dir } = this.props as any;
    
    return (
      <Html dir={dir} lang="fa">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
