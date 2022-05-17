import { API_URL } from './../constants/api-routing';
import { useEffect, useRef, useState } from 'react';
import socketIOClient, { Socket } from 'socket.io-client';
import { useCookies } from 'react-cookie';
import { ChatMessage, User } from '.prisma/client';

const NEW_CHAT_MESSAGE_EVENT = 'message';

const useChat = () => {
  const [messages, setMessages] = useState<(ChatMessage & { User: User })[]>([]);
  const socketRef = useRef<Socket>();
  const [cookies] = useCookies(['auth']);

  useEffect(() => {
    socketRef.current = socketIOClient(API_URL);

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

  return { messages, sendMessage, setMessages };
};

export default useChat;
