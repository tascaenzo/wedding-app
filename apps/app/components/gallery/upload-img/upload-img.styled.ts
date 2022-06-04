import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-left: 40px;
  margin-right: 40px;
  background-color: #FFF;
  border-radius: 25px;
  box-shadow: -1px 1px 19px 3px rgba(168, 168, 168, 0.48);
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

export const Text = styled.span`
  padding-left: 12px;
  font-weight: bold;
  padding-top: 15px;
  text-transform: uppercase;
  text-align: center;
`;
