import { GRAY } from '@wedding/app/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100px;
  padding-left: 22px;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 22px;
  padding-top: 2px;
`;

export const Avatar = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${GRAY};
  border-radius: 15px;
`;

export const TextBold = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: gray;
`;
