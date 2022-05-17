import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  Avatar,
  Container,
  TextBold,
  TextContainer,
} from './home-header.styled';

export const HomeHeader = () => {
  const [cookies] = useCookies(['auth']);
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <Container>
      <Avatar />
      <TextContainer>
        {!isSSR && <TextBold>Ciao {cookies?.auth?.firstName}</TextBold>}
        <div>Benvenuta</div>
      </TextContainer>
    </Container>
  );
};
