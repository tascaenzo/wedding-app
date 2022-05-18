import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 6px;
  margin-left: 18px;
  margin-right: 18px;
`;

export const MsgContainer = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const Msg = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d1d5db;
  word-wrap: break-word;
  padding: 10px;
  border-radius: 0 12px 12px 12px;
`;

export const Text = styled.span`
  padding-bottom: 6px;
  color: #1f2937;
  font-size: 12px;
`;
