import {
  Avatar,
  Container,
  Text,
  TextBold,
  TextContainer,
} from './home-header.styled';

export const HomeHeader = () => {
  return (
    <Container>
      <Avatar />
      <TextContainer>
        <TextBold>Ciao Noemi</TextBold>
        <Text>Benvenuta</Text>
      </TextContainer>
    </Container>
  );
};
