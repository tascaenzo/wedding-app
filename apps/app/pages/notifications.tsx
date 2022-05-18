/* eslint-disable react-hooks/exhaustive-deps */
import { ADD_NOTIFICATIONS, WHITE } from '../constants';
import { NOTIFICATION } from '../constants/api-routing';
import { useFetch } from '../hooks/use-fatch';
import { PushMessage } from '@prisma/client';
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
  const [cookies] = useCookies(['auth']);

  const [notifications, setNotifications] = useState<PushMessage[]>([]);

  useEffect(() => {
    (async () => {
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
      {cookies.auth?.role === 'ADMIN' && (
        <CircleBtn
          icon={<IoMdAdd size={32} color={WHITE} />}
          onClick={() => push(ADD_NOTIFICATIONS)}
        />
      )}
    </Layout>
  );
}

export default Notifications;
