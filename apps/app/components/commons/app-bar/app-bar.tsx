import { PRIMARY, WHITE } from '@wedding/app/constants/color';
import { HOME } from '@wedding/app/constants/app-routing';
import { BottomBar, Container, Text } from './app-bar.styled';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useRouter } from 'next/router';

export const AppBar = () => {
  const router = useRouter();

  return (
    <>
      <Container>
        <IoMdArrowRoundBack
          fontSize={28}
          color={WHITE}
          onClick={() => router.push(HOME)}
        />
        <Text onClick={() => router.push(HOME)}>Indietro</Text>
      </Container>
      <div style={{ backgroundColor: PRIMARY }}>
        <BottomBar />
      </div>
    </>
  );
};
