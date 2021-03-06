import { PushMessage } from '@prisma/client';
import { Container, DataText, Item } from './message-card.styled';
import { MdNotificationsActive } from 'react-icons/md';

export const MessageCard = ({ message }: { message: PushMessage }) => {
  return (
      <Container>
        <Item>
          <MdNotificationsActive color="#e8e8e8" size={36} />
        </Item>
        <Item>{message.message}</Item>
        <DataText>{message.time as unknown as string}</DataText>
      </Container>
  );
};
