import {
  AppBar,
  ChatContainer,
  ChatMessage,
  ChatSendBar,
  ChatWrapper,
  Layout,
} from '../components';
import { useCookies } from 'react-cookie';
import useChat from '../hooks/use-chat';
import React from 'react';

function Chat() {
  const { messages, sendMessage } = useChat();
  const [cookies] = useCookies(['auth']);

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
                author={msg.User}
                rightAlign={msg.userId === cookies?.auth?.id}
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
