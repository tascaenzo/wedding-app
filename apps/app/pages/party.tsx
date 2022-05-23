import { Role, User } from '@prisma/client';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { AppBar, Await, CircleBtn, Layout } from '../components';
import { WHITE } from '../constants';
import { GET_META, GET_USER, SET_META } from '../constants/api-routing';
import { useFetch } from '../hooks/use-fatch';
import { BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs';
const KEY = 'PARTY_ENABLED';

export function Party() {
  const { get, put } = useFetch();
  const [isEnabled, setIsEnabled] = useState(null);
  const [cookies, setCookie] = useCookies(['auth']);
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    (async () => {
      const u = await get(`${GET_USER}/${cookies.auth?.id}`, {});
      setCookie('auth', u, { maxAge: 3600 * 24 * 15 }); //15 giorni
      setUser(u);
      const response = await get(`${GET_META}/${KEY}`, {});
      setIsEnabled(response.value);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const enableDisable = async () => {
    const response = await put(`${SET_META}/${KEY}`, {
      body: { value: !isEnabled },
    });
    setIsEnabled(response.value);
  };

  if (isEnabled === null) return <></>;

  return (
    <Layout>
      <AppBar />
      {!isEnabled && <Await />}
      {user && user.role === Role.ADMIN && (
        <CircleBtn
          icon={
            isEnabled ? (
              <BsFillLockFill size={32} color={WHITE} />
            ) : (
              <BsFillUnlockFill size={32} color={WHITE} />
            )
          }
          onClick={enableDisable}
        />
      )}
    </Layout>
  );
}

export default Party;
