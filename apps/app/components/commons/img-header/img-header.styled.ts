import { BACKGROUND } from '@wedding/app/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 300px;
  object-fit: cover;
  background-position: center;
  background-image: url('https://lh3.googleusercontent.com/pw/AM-JKLV5EmVPtvy2TpMUn2f0nUJlj1V63TL4NrP_6LBRuQM5UfncicdZpEEZUvxx2PKKhPK3_2dEWhIKMF7VdqxGeVxv5zNdVJwUTMMl5e44zo0YSzPBYVfJUQSde0b2cSGoNqRvn_MUNphTEoxIbzGgWDOBBw=w1203-h902-no?authuser=0');
`;

export const BottomBar = styled.div`
  background-color: ${BACKGROUND};
  height: 30px;
  border-radius: 40px 40px 0px 0px;
`;
