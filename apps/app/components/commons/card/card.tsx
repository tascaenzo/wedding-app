import { CardProps } from './card.interface';
import { Btn, Container, Text } from './card.styled';

export const Card = ({ icon, text, color, onClick }: CardProps) => {
  return (
    <Container onClick={onClick}>
      <Btn style={{ backgroundColor: color }}>{icon}</Btn>
      <Text>{text}</Text>
    </Container>
  );
};
