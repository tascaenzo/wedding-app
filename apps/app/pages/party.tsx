import { BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs';
import { Invited, Role, Table, User } from '@prisma/client';
import { useFetch } from '../hooks/use-fatch';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { WHITE } from '../constants';
import {
  AppBar,
  Await,
  Btn,
  BtnContainer,
  CircleBtn,
  Layout,
  Menu,
  Table as TableList,
} from '../components';
import {
  GET_META,
  GET_TABLE,
  GET_USER,
  SET_META,
} from '../constants/api-routing';
const KEY = 'PARTY_ENABLED';

export function Party() {
  const { get, put } = useFetch();
  const [isEnabled, setIsEnabled] = useState(null);
  const [cookies, setCookie] = useCookies(['auth']);
  const [user, setUser] = useState<User>(null);
  const [tab, setTab] = useState(0);
  const [tables, setTables] = useState<(Table & { Invited: Invited[] })[]>([]);

  useEffect(() => {
    (async () => {
      const u = await get(`${GET_USER}/${cookies.auth?.id}`, {});
      setCookie('auth', u, { maxAge: 3600 * 24 * 15 }); //15 giorni
      setUser(u);
      const response = await get(`${GET_META}/${KEY}`, {});
      setIsEnabled(response.value);

      const t = await get(GET_TABLE, {});
      setTables(t);
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
      {isEnabled && (
        <>
          <BtnContainer>
            <Btn onClick={() => setTab(0)} selected={tab === 0}>
              Menu
            </Btn>
            <Btn onClick={() => setTab(1)} selected={tab === 1}>
              Tavoli
            </Btn>
          </BtnContainer>
          <br />
          {tab === 0 && <Menu />}
          {tab === 1 && <TableList tables={tables} />}
        </>
      )}
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
