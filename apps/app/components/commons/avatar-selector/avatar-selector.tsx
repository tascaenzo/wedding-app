import { Container, SelectContainer, Text } from './avatar-selector.styled';
import Avatar from 'react-nice-avatar';
import { avatars } from './avatar.type';
import { AvatarSelectorProps } from './avatar-selector.interface';

export const AvatarSelector = ({ onSelect }: AvatarSelectorProps) => {
  return (
    <Container>
      <Text>Seleziona il tuo avatar</Text>
      <SelectContainer>
        {[...avatars].map((config, index) => (
          <div
            onClick={() => onSelect(`avatart${index + 1}`)}
            key={index}
            style={{ paddingBottom: '22px' }}
          >
            <Avatar
              style={{ width: '8rem', height: '8rem', float: 'left' }}
              {...config}
            />
          </div>
        ))}
      </SelectContainer>
    </Container>
  );
};
