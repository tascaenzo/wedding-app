import {
  PRIMARY,
  BACKGROUND,
  PRIMARY_LIGHT,
  WHITE,
} from '@wedding/app/constants/color';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${PRIMARY};
  min-height: 80px;
  max-height: 80px;
  justify-content: center;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
`;

export const BorderBar = styled.div`
  background-color: ${BACKGROUND};
  height: 30px;
  border-radius: 0 0 80px 80px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:40px;
  width: 100%;
  background-color: ${PRIMARY_LIGHT};
  padding: 8px;;
  border-radius: 10px;
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 50px;
  background-color: ${WHITE};
  border-radius: 10px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  color: ${WHITE};
  font-size: 16px;
  border-color: transparent;
  &:focus {
    outline: none;
  }
`;
