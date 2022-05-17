import { AppProps } from 'next/app';
import Head from 'next/head';
import './global.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content='#FFF' />
        <title>Wedding App</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
