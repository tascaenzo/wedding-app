import { GRAY, PRIMARY, WHITE } from '@wedding/app/constants';
import styled from 'styled-components';

export const BtnContainer = styled.div`
  display: flex;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: -22px;
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
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  margin-right: 12px;
`;

export const CardContainer = styled.div`
  background-color: ${WHITE};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;
  padding: 18px;
  margin: 18px;
  border-radius: 10px;
`