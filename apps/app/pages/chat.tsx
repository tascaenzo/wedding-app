import {
  AppBar,
  ChatContainer,
  ChatMessage,
  ChatSendBar,
  ChatWrapper,
  Layout,
} from '../components';

const data = [
  { msg: 'Ciao secondo mesaggio', emitter: 'sss' },
  { msg: 'Ciao secondo mesaggio', emitter: 'sss' },
  { msg: 'Ciao secondo mesaggio', emitter: 'sss' },
  { msg: 'Ciao secondo mesaggio', emitter: 'sss' },
  { msg: 'Ciao secondo mesaggio', emitter: 'sss' },
  { msg: 'duuu', emitter: 'me' },
  { msg: 'Ciao secondo mesaggio', emitter: 'sss' },
];

function Chat() {
  return (
    <Layout>
      <ChatWrapper>
        <AppBar />
        <ChatContainer>
          {data.map((msg, index) => (
            <ChatMessage
              key={index}
              message={msg.msg}
              time={'18.00 AM'}
              author={'Enzo Tasca'}
              rightAlign={msg.emitter === 'me'}
            />
          ))}
        </ChatContainer>
        <ChatSendBar />
      </ChatWrapper>
    </Layout>
  );
}

export default Chat;
