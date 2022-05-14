import { HomeCardProps } from './home-card.interface';
import { Btn, Container, Text } from './home-card.style';

export const HomeCard = ({ icon, text, color, onClick }: HomeCardProps) => {
  return (
    <Container onClick={onClick}>
      <Btn style={{ backgroundColor: color }}>{icon}</Btn>
      <Text>{text}</Text>
    </Container>
  );
};
