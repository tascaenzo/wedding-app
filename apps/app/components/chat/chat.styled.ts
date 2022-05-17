import styled from 'styled-components';

export const ChatContainer = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
`;

export const ChatWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;
