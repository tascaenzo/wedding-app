import { GRAY } from '../../../constants/color';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 22px;
  color: ${GRAY};
  text-align: center;
  padding-left: 12px;
  padding-right: 12px;
`;
