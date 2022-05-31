import { WHITE } from '@wedding/app/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: -20px;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  margin: 10px;
  background-color: #fff;
`;

export const Title = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
`;

export const TableItem = styled.span`
  font-size: 16px;
  padding-top: 8px;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  //width: calc(100vw - 80px);
  margin:12px;
  background-color: ${WHITE};
  border-radius: 12px;
`;

export const ItemSearch = styled.div`
  margin: 12px;
  padding: 12px;
  background-color: red;
  border-radius: 12px;
`