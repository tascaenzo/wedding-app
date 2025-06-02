/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from 'next/app';
import Head from 'next/head';
import './global.css';
import { PRIMARY } from '../constants';
import { useEffect } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const hideAddressBar = () => {
      // Nascondi la barra degli indirizzi scrollando leggermente
      setTimeout(() => {
        window.scrollTo(0, 1);
      }, 100);
    };

    // Trigger all'apertura e orientamento
    window.addEventListener('load', hideAddressBar);
    window.addEventListener('orientationchange', () => {
      setTimeout(hideAddressBar, 500);
    });

    // Cleanup
    return () => {
      window.removeEventListener('load', hideAddressBar);
      window.removeEventListener('orientationchange', hideAddressBar);
    };
  }, []);

  return (
    <>
      <Head>
        {/* PWA Manifest */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link rel="apple-touch-icon" href="/icon.png"></link>

        {/* Theme Colors - Personalizza questi colori */}
        <meta name="theme-color" content={PRIMARY} />
        <meta name="msapplication-TileColor" content={PRIMARY} />

        {/* iOS Safari - Barra di stato */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Wedding App" />

        {/* Android Chrome - Colore della barra di navigazione */}
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Colore di sfondo per splash screen */}
        <meta name="msapplication-TileImage" content="/icon.png" />

        {/* Descrizione per quando viene aggiunta alla home screen */}
        <meta
          name="description"
          content="App per il matrimonio di Marco e Aurora"
        />

        {/* Font preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap"
          rel="stylesheet"
        />

        {/* Viewport ottimizzato per mobile */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />

        <title>Wedding App</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
