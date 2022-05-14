import {
  BACKGROUND,
  PRIMARY_LIGHT,
  PRIMARY,
  WHITE,
} from '@wedding/app/constants/color';
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${PRIMARY};
  padding-bottom: 26px;
`;

export const TopBar = styled.div`
  background-color: ${PRIMARY};
  height: 30px;
  border-radius: 40px 40px 0px 0px;
`;

export const BottomBar = styled.div`
  background-color: ${BACKGROUND};
  height: 30px;
  border-radius: 40px 40px 0px 0px;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 60px;
  background-color: ${PRIMARY_LIGHT};
`;

export const BtnContainer = styled.div`
  display: flex;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 12px;
`;

export const Text = styled.text`
  color: ${WHITE};
  padding-top: 6px;
`;

export const TextBold = styled.text`
  font-weight: bold;
  font-size: 22px;
  color: ${WHITE};
`;
