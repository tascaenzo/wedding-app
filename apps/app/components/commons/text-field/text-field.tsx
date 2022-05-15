import { TextFieldInterface } from './text-field.interface';
import { Container, Input } from './text-field.styled';

export const TextField = ({
  icon,
  value,
  placeholder,
  onChange,
}: TextFieldInterface) => {
  return (
    <Container>
      <Input value={value} placeholder={placeholder} />
      {icon}
    </Container>
  );
};
