import { WHITE } from '@wedding/app/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 12px;
  margin-left: 36px;
  margin-right: 36px;
  background-color: ${WHITE};
  height: 80px;
  align-items: center;
  box-shadow: -1px 1px 19px 3px rgba(168, 168, 168, 0.48);
`;

export const Item = styled.span`
  display: flex;
  padding: 8px;
`

export const DataText = styled.div`
  font-size: 18px;
`
