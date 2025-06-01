import { useEffect, useState } from 'react';
import { trackPromise } from 'react-promise-tracker';
import dynamic from 'next/dynamic';
import { Container } from './loader.styled';

const Player: any = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  {
    ssr: false, // Disabilita il rendering server-side
    loading: () => (
      <div
        style={{
          height: '300px',
          width: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
        }}
      >
        Caricamento...
      </div>
    ),
  }
);

export const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  const timer = async () => {
    trackPromise(new Promise((resolve) => setTimeout(resolve, 1000 * 3)));
  };

  useEffect(() => {
    // Assicurati che il componente sia montato lato client
    setIsClient(true);
    timer();
  }, []);

  // Non renderizzare nulla fino a quando non siamo lato client
  if (!isClient) {
    return (
      <Container>
        <div
          style={{
            height: '300px',
            width: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
          }}
        >
          Caricamento...
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_ne4g7s9l.json"
        style={{ height: '300px', width: '300px' }}
      />
    </Container>
  );
};
