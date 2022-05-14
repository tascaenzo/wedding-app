import {
  AppBar,
  ChatContainer,
  ChatSendBar,
  ChatWrapper,
  Layout,
} from '../components';

function Chat() {
  return (
    <Layout>
      <ChatWrapper>
        <AppBar />
        <ChatContainer>
          <h1>Msg 1</h1>
        </ChatContainer>
        <ChatSendBar />
      </ChatWrapper>
    </Layout>
  );
}

export default Chat;
