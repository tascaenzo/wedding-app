import { HOME, LOGIN } from '@wedding/app/constants';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { LayoutProps } from './layout.interface';
import { LayoutContainer } from './layout.styled';
import { usePromiseTracker } from 'react-promise-tracker';
import { Loader } from '../loader';

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [cookies] = useCookies(['auth']);
  const [loading, setLoading] = useState(true);
  const { promiseInProgress } = usePromiseTracker();

  useEffect(() => {
    if (router.asPath !== LOGIN && !cookies.auth) router.push(LOGIN);
    if (router.asPath === LOGIN && cookies.auth) router.push(HOME);
    setLoading(false);
  }, [cookies.auth, router]);

  if (loading || promiseInProgress) return <Loader />;

  return <LayoutContainer>{children}</LayoutContainer>;
};
