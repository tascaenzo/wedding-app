import { useCookies } from 'react-cookie';
import {
  Avatar,
  Container,
  Text,
  TextBold,
  TextContainer,
} from './home-header.styled';

export const HomeHeader = () => {
  const [cookies] = useCookies(['auth']);

  return (
    <Container>
      <Avatar />
      <TextContainer>
        <TextBold>Ciao {cookies.auth.firstName}</TextBold>
        <Text>Benvenuta</Text>
      </TextContainer>
    </Container>
  );
};
