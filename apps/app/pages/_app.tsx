import { AppProps } from 'next/app';
import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';
import './global.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wedding App</title>
      </Head>
      <main>
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
      </main>
    </>
  );
}

export default CustomApp;
