import { Player } from '@lottiefiles/react-lottie-player';
import { Container, Text } from './await.styled';

export const Await = () => {
  return (
    <Container>
      <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_vlyrf1yl.json"
        style={{ height: '250px', width: '250px' }}
      />
      <br />
      <Text>Aspetta ancora è presto, torna dopo la cerimonia</Text>
    </Container>
  );
};
