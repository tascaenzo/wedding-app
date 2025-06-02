import { useEffect, useState } from 'react';

export const useViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      // Usa l'altezza visuale della viewport (esclude la barra degli indirizzi)
      const vh = window.visualViewport?.height || window.innerHeight;
      setViewportHeight(vh);

      // Aggiorna la proprietà CSS custom
      document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`);
    };

    // Ascolta i cambiamenti della viewport
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateHeight);
    } else {
      window.addEventListener('resize', updateHeight);
    }

    // Imposta l'altezza iniziale
    updateHeight();

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateHeight);
      } else {
        window.removeEventListener('resize', updateHeight);
      }
    };
  }, []);

  return viewportHeight;
};
