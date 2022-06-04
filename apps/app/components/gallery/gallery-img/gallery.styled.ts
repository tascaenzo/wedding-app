import { WHITE } from '@wedding/app/constants/color';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px;
`;

export const Coll = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
`;

export const Img = styled.img`
  border-radius: 12px;
  width: 100%;
  margin-bottom: 22px;
  box-shadow: 0px -1px 10px 0px #ababab;
`;

export const ImgModal = styled.img`
  border-radius: 12px;
  width: 100%;
`;

export const ModalContainer = styled.div`
  align-items: end;
  display: flex;
  flex-direction: column;
`;

export const CloseModal = styled.div`
  position: relative;
  display: flex;
  background-color: ${WHITE};
  border-radius: 50%;
  top: 22px;
  padding: 3px;
`;
