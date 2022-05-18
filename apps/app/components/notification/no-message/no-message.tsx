import { Player } from '@lottiefiles/react-lottie-player';
import { Container, Text } from './no-message.styled';

export const NoMessage = () => {
  return (
    <Container>
      <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_JkzqCb.json"
        style={{ height: '300px', width: '300px' }}
      />
      <Text>Non ci sono notifiche</Text>
    </Container>
  );
};
