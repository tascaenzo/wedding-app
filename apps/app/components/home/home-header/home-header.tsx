import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { avatars } from '../../commons';
import { Container, TextBold, TextContainer } from './home-header.styled';
import Avatar from 'react-nice-avatar';

export const HomeHeader = () => {
  const [cookies] = useCookies(['auth']);
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if(isSSR) return <></>

  return (
    <Container>
      <Avatar
        style={{ width: '4rem', height: '4rem', float: 'left' }}
        {...avatars.get(cookies?.auth?.avatar)}
      />
      <TextContainer>
        {!isSSR && <TextBold>Ciao {cookies?.auth?.firstName}</TextBold>}
        <div>Benvenuto</div>
      </TextContainer>
    </Container>
  );
};
