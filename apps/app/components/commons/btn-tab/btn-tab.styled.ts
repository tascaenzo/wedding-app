import { GRAY, WHITE, PRIMARY } from '@wedding/app/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
`;

export const BtnContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  margin-top: -36px;
`;

export const Btn = styled.div<{ selected?: boolean }>`
  color: ${(p) => (p.selected ? WHITE : GRAY)};
  white-space: nowrap;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => (p.selected ? PRIMARY : WHITE)};
  padding: 10px;
  margin: 12px;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-transform: uppercase;
`;
