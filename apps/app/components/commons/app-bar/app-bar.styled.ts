import { BACKGROUND, PRIMARY, WHITE } from '@wedding/app/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-height: 70px;
  min-height: 70px;
  align-items: center;
  padding: 0 22px 0 22px;
  background-color: ${PRIMARY};
`;

export const BottomBar = styled.div`
  background-color: ${BACKGROUND};
  height: 30px;
  border-radius: 40px 40px 0px 0px;
`;

export const Text = styled.span`
  color: ${WHITE};
  font-size: 20px;
  padding-left: 8px;
`