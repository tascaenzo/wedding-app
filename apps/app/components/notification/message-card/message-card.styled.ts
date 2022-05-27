import { GRAY, GRAY_DARK } from './../../../constants/color';
import { WHITE } from '@wedding/app/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 12px;
  margin-left: 36px;
  margin-right: 36px;
  background-color: ${WHITE};
  min-height: 80px;
  align-items: center;
  box-shadow: -1px 1px 19px 3px rgba(168, 168, 168, 0.48);
  margin-bottom: 22px;
  position: relative;
  padding-bottom:8px;
  padding-top:8px;
`;

export const Item = styled.span`
  display: flex;
  padding: 8px;
  color: ${GRAY_DARK};
`;

export const DataText = styled.small`
  position: absolute;
  bottom: 8px;
  right: 16px;
  color: ${GRAY};
`;
