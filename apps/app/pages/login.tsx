import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ImgHeader, LoginForm } from '../components';
import { LayoutContainer } from '../components/commons/layout/layout.styled';
import { HOME } from '../constants';
import { Loader } from '../components';

export const Login = () => {
  const { push } = useRouter();
  const [cookies] = useCookies(['auth']);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (cookies.auth !== undefined) push(HOME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <ImgHeader />
      <LayoutContainer>
        <LoginForm setIsLoading={() => setIsLoading(true)} />
      </LayoutContainer>
    </>
  );
};

export default Login;
