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

  const fatchData = async () => {
    const dataMessage: { message: number } = await get(COUNT_MESSAGE, {});
    return dataMessage;
  };

  useEffect(() => {
    socketRef1.current = socketIOClient(API_URL);

    socketRef1.current.on('connect', async () => {
      await fatchData();
      //const dataNotification: { notifications: number } = await get(COUNT_NOTIFICATION, {});
      //setMessagesCount(0);
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
