import dynamic from 'next/dynamic';
import { Container, Text } from './await.styled';

// Import dinamico del Player solo lato client
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: '250px',
          width: '250px',
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
            fontSize: '24px',
            color: '#6c757d',
            textAlign: 'center',
          }}
        >
          ⏳
        </span>
      </div>
    ),
  }
) as any;

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
