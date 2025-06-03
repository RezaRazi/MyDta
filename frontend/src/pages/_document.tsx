import { createGetInitialProps } from '@mantine/next';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await getInitialProps(ctx);
    const { locale } = ctx;
    const dir = locale === 'fa' ? 'rtl' : 'ltr';
    
    return {
      ...initialProps,
      locale,
      dir,
    };
  }

  render() {
    const { dir } = this.props as any;
    
    return (
      <Html dir={dir}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
