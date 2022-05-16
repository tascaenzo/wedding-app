import { WHITE } from '@wedding/app/constants/color';
import { PRIMARY_LIGHT } from '@wedding/app/constants';
import styled from 'styled-components';

export const Form = styled.div`
  padding: 26px;
`;

export const Button = styled.button`
  background-color: ${PRIMARY_LIGHT};
  padding: 12px;
  border-radius: 30px;
  width: 100%;
  border-color: transparent;
  color: ${WHITE};
  text-transform: uppercase;
`;
