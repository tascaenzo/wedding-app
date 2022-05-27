import {
  API_URL,
  COUNT_NOTIFICATION,
  COUNT_MESSAGE,
} from './../constants/api-routing';
import { useEffect, useRef, useState } from 'react';
import socketIOClient, { Socket } from 'socket.io-client';
import { useFetch } from './use-fatch';

const COUNT_MESSAGE_EVENT = 'message_count';
const COUNT_NOTIFICATION_EVENT = 'notification_count';

const useMessageCount = () => {
  const [messageCount, setMessagesCount] = useState<number>(0);
  const [notificationCount, setNotificationCount] = useState<number>(0);

  const socketRef1 = useRef<Socket>();
  const { get } = useFetch();

  useEffect(() => {
    socketRef1.current = socketIOClient(API_URL);

    socketRef1.current.on('connect', async () => {
      const dataMessage = await get(COUNT_MESSAGE, {});
      const dataNotification = await get(COUNT_NOTIFICATION, {});

      setMessagesCount(dataMessage.message);
      setNotificationCount(dataNotification.notifications);
    });

    socketRef1.current.on(COUNT_MESSAGE_EVENT, (data) => {
      setMessagesCount(data);
    });

    socketRef1.current.on(COUNT_NOTIFICATION_EVENT, (data) => {
      setNotificationCount(data);
    });

    return () => {
      socketRef1.current.disconnect();
    };
  }, []);

  return { messageCount, notificationCount };
};

export default useMessageCount;
