import { BACKGROUND } from '@wedding/app/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('https://api.enzorosalinda.it/static/om6sINPCsMbQqLbJCHhHK_IMG-20220605-WA0001.jpeg');
`;

export const BottomBar = styled.div`
  background-color: ${BACKGROUND};
  height: 30px;
  border-radius: 40px 40px 0px 0px;
`;
