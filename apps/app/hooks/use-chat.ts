import { API_URL, CHAT_MESSAGE } from './../constants/api-routing';
import { useEffect, useRef, useState } from 'react';
import socketIOClient, { Socket } from 'socket.io-client';
import { useCookies } from 'react-cookie';
import { ChatMessage, User } from '.prisma/client';
import { useFetch } from './use-fatch';

const NEW_CHAT_MESSAGE_EVENT = 'message';

const useChat = () => {
  const [messages, setMessages] = useState<(ChatMessage & { User: User })[]>(
    []
  );
  const socketRef = useRef<Socket>();
  const [cookies] = useCookies(['auth']);
  const { get } = useFetch();

  useEffect(() => {
    socketRef.current = socketIOClient(API_URL);

    socketRef.current.on('connect', async () => {
      const data: (ChatMessage & { User: User })[] = await get(
        CHAT_MESSAGE,
        {}
      );
      setMessages(data);
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [incomingMessage, ...messages]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (message: string) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      message,
      userId: cookies.auth.id,
    });
  };

  return { messages, sendMessage };
};

export default useChat;
