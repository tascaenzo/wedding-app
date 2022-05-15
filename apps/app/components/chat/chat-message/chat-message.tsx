import { PRIMARY_LIGHT } from '@wedding/app/constants';
import { ChatMessageProps } from './chat-message.interface';
import {
  Avatar,
  Container,
  Msg,
  MsgContainer,
  Text,
} from './chat-message.styled';

export const ChatMessage = ({
  author,
  rightAlign,
  message,
  time,
}: ChatMessageProps) => {
  if (rightAlign) {
    return (
      <Container
        style={{ justifyContent: 'right', flexDirection: 'row-reverse' }}
      >
        <Avatar />
        <MsgContainer>
          <Text style={{ textAlign: 'right' }}>{author}</Text>
          <Msg
            style={{
              borderRadius: '12px 0 12px 12px',
              backgroundColor: PRIMARY_LIGHT,
            }}
          >
            {message}
            <Text style={{ textAlign: 'left' }}>{time}</Text>
          </Msg>
        </MsgContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Avatar />
      <MsgContainer>
        <Text>{author}</Text>
        <Msg>
          {message}
          <Text style={{ textAlign: 'right' }}>{time}</Text>
        </Msg>
      </MsgContainer>
    </Container>
  );
};
