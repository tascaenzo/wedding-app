import { WHITE, GRAY } from '@wedding/app/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 12px;
  margin-left: 36px;
  margin-right: 36px;
  background-color: ${WHITE};
  height: 90px;
  align-items: center;
  box-shadow: -1px 1px 19px 3px rgba(168, 168, 168, 0.48);
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
  width: 66px;
  border-radius: 12px;
  margin-left: 12px;
  box-shadow: -1px 1px 19px 3px rgba(168, 168, 168, 0.48);
`;

export const Text = styled.span`
  font-size: 18px;
  padding: 18px;
  color: ${GRAY};
`;
