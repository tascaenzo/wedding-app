import { PRIMARY, PRIMARY_LIGHT } from '@wedding/app/constants';
import {
  Container,
  BorderBar,
  InputContainer,
  Btn,
  Input,
} from './chat-send-bar.styled';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { ChatSendBarProps } from './chat-send-bar.interface';
import { useState } from 'react';

export const ChatSendBar = ({ onSend }: ChatSendBarProps) => {
  const [message, setMessage] = useState<string>('');

  const onClick = () => {
    if (message === '') return;
    onSend(message);
    setMessage('');
  };

  return (
    <>
      <div style={{ backgroundColor: PRIMARY }}>
        <BorderBar />
      </div>
      <Container>
        <InputContainer>
          <Input value={message} onChange={(event) => setMessage(event.target.value)} />
          <Btn onClick={onClick}>
            <RiSendPlane2Fill size={22} color={PRIMARY_LIGHT} />
          </Btn>
        </InputContainer>
      </Container>
    </>
  );
};
