import { GRAY, GRAY_DARK } from '@wedding/app/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: -20px;
`;

export const AccordionContainer = styled.div`
  padding-top: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${GRAY_DARK};
  width: 100%;
`

export const P = styled.p`
  padding: 3px;
  text-align: center;
`