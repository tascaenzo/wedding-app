import { PRIMARY_LIGHT } from '@wedding/app/constants';
import { ChatMessageProps } from './chat-message.interface';
import { Container, Msg, MsgContainer, Text } from './chat-message.styled';
import Avatar from 'react-nice-avatar';
import { avatars } from '../../commons';

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
        <Avatar
          style={{ width: '3rem', height: '3rem', float: 'left' }}
          {...avatars.get(author.avatar)}
        />
        <MsgContainer>
          <Text style={{ textAlign: 'right' }}>
            {`${author.firstName} ${author.lastName} `}
          </Text>
          <Msg
            style={{
              borderRadius: '12px 0 12px 12px',
              backgroundColor: PRIMARY_LIGHT,
            }}
          >
            <span style={{ color: '#464646' }}>{message}</span>
            <Text style={{ textAlign: 'right', padding: '0px' }}>{time}</Text>
          </Msg>
        </MsgContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Avatar
        style={{ width: '3rem', height: '3rem', float: 'left' }}
        {...avatars.get(author.avatar)}
      />
      <MsgContainer>
        <Text> {`${author.firstName} ${author.lastName} `}</Text>
        <Msg>
          <span style={{ color: '#464646' }}>{message}</span>
          <Text style={{ textAlign: 'right', padding: '0px' }}>{time}</Text>
        </Msg>
      </MsgContainer>
    </Container>
  );
};
