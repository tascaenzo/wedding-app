import { ERROR, GRAY } from '@wedding/app/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  border-radius: 12px;
  padding-left: 8px;
  padding-right: 8px;
  box-shadow: -1px 1px 19px 3px rgba(168, 168, 168, 0.48);
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  color: ${GRAY};
  font-size: 16px;
  border-color: transparent;
  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  background-color: transparent;
  color: ${GRAY};
  font-size: 16px;
  border-color: transparent;
  &:focus {
    outline: none;
  }
`;

export const TextFieldError = styled.div`
  color: ${ERROR};
  margin: 8px;
`;
