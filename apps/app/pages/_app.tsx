/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from 'next/app';
import Head from 'next/head';
import './global.css';
import { PRIMARY } from '../constants';
import { useEffect } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Inizializzazione per mobile - gestione viewport dinamico
    const setVH = () => {
      // Usa visualViewport se disponibile (più preciso), altrimenti innerHeight
      const vh = window.visualViewport?.height || window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`);
    };

    // Imposta l'altezza iniziale
    setVH();

    // Event listeners per aggiornamenti dinamici della viewport
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', setVH);
    } else {
      window.addEventListener('resize', setVH);
    }

    window.addEventListener('orientationchange', () => {
      // Delay per permettere al browser di aggiornare le dimensioni
      setTimeout(setVH, 100);
    });

    // Gestione specifica per nascondere la barra degli indirizzi su mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Prima strategia: scroll minimo per attivare il nascondimento
      const hideAddressBar = () => {
        if (window.scrollY === 0) {
          window.scrollTo(0, 1);
          // Ritorna al top dopo che la barra si è nascosta
          setTimeout(() => window.scrollTo(0, 0), 500);
        }
      };

      // Esegui il nascondimento dopo il caricamento iniziale
      setTimeout(hideAddressBar, 1000);

      // Ri-nascondi la barra quando l'utente tocca lo schermo
      const handleTouch = () => {
        setTimeout(hideAddressBar, 300);
      };

      document.addEventListener('touchstart', handleTouch, { once: true });

      // Cleanup per touchstart
      return () => {
        document.removeEventListener('touchstart', handleTouch);
        if (window.visualViewport) {
          window.visualViewport.removeEventListener('resize', setVH);
        } else {
          window.removeEventListener('resize', setVH);
        }
        window.removeEventListener('orientationchange', setVH);
      };
    }

    // Cleanup per dispositivi non mobile
    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', setVH);
      } else {
        window.removeEventListener('resize', setVH);
      }
      window.removeEventListener('orientationchange', setVH);
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

        {/* iOS Safari - Configurazione per nascondere la barra degli indirizzi */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Wedding App" />

        {/* Android Chrome - Configurazione per nascondere la barra di navigazione */}
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Colore di sfondo per splash screen */}
        <meta name="msapplication-TileImage" content="/icon.png" />

        {/* Descrizione per quando viene aggiunta alla home screen */}
        <meta
          name="description"
          content="20.06.2025 - Marco e Aurora si sposano! Scopri tutti i dettagli del matrimonio, le informazioni utili e molto altro ancora."
        />

        {/* Font preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap"
          rel="stylesheet"
        />

        {/* Viewport ottimizzato per mobile con viewport-fit=cover per gestire il notch */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"
        />

        <title>Marco & Aurora</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
