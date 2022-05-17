import { LOGIN } from '@wedding/app/constants';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { LayoutProps } from './layout.interface';
import { LayoutContainer } from './layout.styled';

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [cookies] = useCookies(['auth']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.asPath !== LOGIN && !cookies.auth) router.push(LOGIN);
    setLoading(false);
  }, [cookies.auth, router]);

  if (loading) return <></>;

  return <LayoutContainer>{children}</LayoutContainer>;
};
