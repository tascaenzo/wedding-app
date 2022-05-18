import { TextFieldInterface } from './text-field.interface';
import { Container, Input, TextArea } from './text-field.styled';

export const TextField = ({
  icon,
  value,
  placeholder,
  type,
  onChange,
}: TextFieldInterface) => {
  return (
    <Container>
      {type === 'input' ||
        (type === undefined && (
          <Input
            onChange={(value) => onChange(value.target.value)}
            value={value}
            placeholder={placeholder}
          />
        ))}

      {type === 'textarea' && (
        <div style={{ margin: '12px', width: '100%' }}>
          <TextArea
            rows={5}
            onChange={(value) => onChange(value.target.value)}
            value={value}
            placeholder={placeholder}
          />
        </div>
      )}
      {icon}
    </Container>
  );
};
