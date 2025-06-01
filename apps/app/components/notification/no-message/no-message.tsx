import dynamic from 'next/dynamic';
import { Container, Text } from './no-message.styled';

// Import dinamico del Player solo lato client
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: '300px',
          width: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px dashed #dee2e6',
        }}
      >
        <span
          style={{
            fontSize: '14px',
            color: '#6c757d',
            textAlign: 'center',
          }}
        >
          📭
        </span>
      </div>
    ),
  }
) as any;

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
