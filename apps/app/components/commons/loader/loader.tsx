import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';
import { Container } from './loader.styled';

export const Loader = () => {
  const timer = async () => {
    trackPromise(new Promise((resolve) => setTimeout(resolve, 1000 * 4)));
  };

  useEffect(() => {
    timer();
  }, []);

  return (
    <Container>
      <Player
        autoplay
        loop
        //src="https://assets10.lottiefiles.com/packages/lf20_7ub0glk3.json"
        src="https://assets4.lottiefiles.com/packages/lf20_ne4g7s9l.json"
        style={{ height: '300px', width: '300px' }}
      />
    </Container>
  );
};
