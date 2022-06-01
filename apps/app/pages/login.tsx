import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { ImgHeader, Layout, LoginForm } from '../components';
import { HOME } from '../constants';

export const Login = () => {
  const { push } = useRouter();
  const [cookies] = useCookies(['auth']);

  useEffect(() => {
    if (cookies.auth !== undefined) push(HOME);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <ImgHeader />
      <LoginForm />
    </Layout>
  );
};

export default Login;
