import { PRIMARY } from '@wedding/app/constants';
import { Container, BorderBar } from './chat-send-bar.styled';

export const ChatSendBar = () => {
  return (
    <>
      <div style={{ backgroundColor: PRIMARY }}>
        <BorderBar />
      </div>
      <Container>
        <input />
      </Container>
    </>
  );
};
