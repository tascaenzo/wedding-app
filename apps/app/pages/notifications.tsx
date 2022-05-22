/* eslint-disable react-hooks/exhaustive-deps */
import { ADD_NOTIFICATIONS, WHITE } from '../constants';
import { GET_USER, NOTIFICATION } from '../constants/api-routing';
import { useFetch } from '../hooks/use-fatch';
import { PushMessage, Role, User } from '@prisma/client';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { IoMdAdd } from 'react-icons/io';
import { useRouter } from 'next/router';
import {
  CircleBtn,
  AppBar,
  Layout,
  NoMessage,
  MessageCard,
} from '../components';

export function Notifications() {
  const { get } = useFetch();
  const { push } = useRouter();
  const [cookies, setCookie] = useCookies(['auth']);

  const [notifications, setNotifications] = useState<PushMessage[]>([]);
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    (async () => {
      const u = await get(`${GET_USER}/${cookies.auth?.id}`, {});
      setCookie('auth', u, { maxAge: 3600 * 24 * 15 }); //15 giorni
      setUser(u);
      const response = await get(NOTIFICATION, {});
      setNotifications(response);
    })();
  }, []);

  return (
    <Layout>
      <AppBar />
      <div>
        {notifications.map((notification, index) => (
          <MessageCard key={index} message={notification} />
        ))}
      </div>
      {notifications.length === 0 && <NoMessage />}
      {user && user.role === Role.ADMIN && (
        <CircleBtn
          icon={<IoMdAdd size={32} color={WHITE} />}
          onClick={() => push(ADD_NOTIFICATIONS)}
        />
      )}
    </Layout>
  );
}

export default Notifications;
