import { GRAY, GRAY_DARK, PRIMARY, WHITE } from '@wedding/app/constants/color';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 12px;
  margin-top: 10px;
  // border-style: solid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  // border-color: ${GRAY_DARK};
  color: ${GRAY_DARK};
  background-color: ${WHITE};
`;
