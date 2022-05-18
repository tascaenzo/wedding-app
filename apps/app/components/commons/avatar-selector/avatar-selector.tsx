import { Container, SelectContainer, Text } from './avatar-selector.styled';
import Avatar from 'react-nice-avatar';
import { avatarName, avatars } from './avatar.type';
import { AvatarSelectorProps } from './avatar-selector.interface';

export const AvatarSelector = ({ onSelect }: AvatarSelectorProps) => {
  return (
    <Container>
      <Text>Seleziona il tuo avatar</Text>
      <SelectContainer>
        {avatarName.map((name, index) => (
          <div
            onClick={() => onSelect(`avatar${index + 1}`)}
            key={index}
            style={{ paddingBottom: '22px' }}
          >
            <Avatar
              style={{ width: '8rem', height: '8rem', float: 'left' }}
              {...avatars.get(name)}
            />
          </div>
        ))}
      </SelectContainer>
    </Container>
  );
};
