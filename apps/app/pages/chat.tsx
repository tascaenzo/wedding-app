import {
  AppBar,
  ChatContainer,
  ChatMessage,
  ChatSendBar,
  ChatWrapper,
  Layout,
} from '../components';
import { useEffect } from 'react';
import { CHAT_MESSAGE } from '../constants/api-routing';
import { useCookies } from 'react-cookie';
import { useFetch } from '../hooks/use-fatch';
import { ChatMessage as ChatMessageInterface, User } from '@prisma/client';
import React from 'react';
import useChat from '../hooks/use-chat';

function Chat() {
  const { get } = useFetch();
  const { messages, setMessages, sendMessage } = useChat();
  const [cookies] = useCookies(['auth']);

  useEffect(() => {
    (async () => {
      const messages: (ChatMessageInterface & { User: User })[] = await get(
        CHAT_MESSAGE,
        {}
      );
      setMessages(messages);
    })();
  }, []);

  return (
    <Layout>
      <ChatWrapper>
        <AppBar />
        <ChatContainer>
          {messages.map((msg, index) => {
            return (
              <ChatMessage
                key={index}
                message={msg.message}
                time={msg.time}
                author={`${msg.User.firstName} ${msg.User.lastName}`}
                rightAlign={msg.userId === cookies.auth.id}
              />
            );
          })}
        </ChatContainer>
        <ChatSendBar onSend={sendMessage} />
      </ChatWrapper>
    </Layout>
  );
}

export default Chat;
