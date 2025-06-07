import { BACKGROUND } from '@wedding/app/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('https://api.marcoeaurora.it/static/cover.webp');
  background-size: cover;
`;

export const BottomBar = styled.div`
  background-color: ${BACKGROUND};
  height: 30px;
  border-radius: 40px 40px 0px 0px;
`;
