import { PRIMARY, PRIMARY_LIGHT } from '@wedding/app/constants';
import { Container, BorderBar, InputContainer, Btn, Input } from './chat-send-bar.styled';
import { RiSendPlane2Fill } from 'react-icons/ri';

export const ChatSendBar = () => {
  return (
    <>
      <div style={{ backgroundColor: PRIMARY }}>
        <BorderBar />
      </div>
      <Container>
        <InputContainer>
          <Input />
          <Btn>
            <RiSendPlane2Fill size={22} color={PRIMARY_LIGHT} />
          </Btn>
        </InputContainer>
      </Container>
    </>
  );
};
