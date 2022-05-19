import { GRAY_DARK } from '@wedding/app/constants/color';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 18px;
`;

export const Title = styled.span`
  color: ${GRAY_DARK};
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Center = styled.div`
  color: ${GRAY_DARK};
  text-align: center;
`;