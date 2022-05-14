import { PRIMARY, BACKGROUND } from '@wedding/app/constants/color';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${PRIMARY};
  height: 80px;
  display: flex;
`;

export const BorderBar = styled.div`
  background-color: ${BACKGROUND};
  height: 30px;
  border-radius: 0 0 80px 80px;
`;
