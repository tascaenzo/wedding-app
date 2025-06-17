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
    if (cookies.auth !== undefined && cookies.auth !== null) push(HOME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <ImgHeader />
      <LayoutContainer>
        <div
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '4px',
            fontSize: '1.2rem',
            textTransform: 'uppercase',
          }}
        >
          <p style={{ paddingBottom: 6 }}>Marco & Aurora</p>
          <p>20.06.2025</p>
        </div>
        <LoginForm setIsLoading={() => setIsLoading(true)} />
      </LayoutContainer>
    </>
  );
};

export default Login;
