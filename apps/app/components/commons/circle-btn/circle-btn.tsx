import { Btn } from './circle-btn.styled';
import { AddBtnProps } from './circle-btn.interface';

export const CircleBtn = ({ icon, onClick }: AddBtnProps) => {
  return (
    <Btn onClick={onClick}>
      {icon}
    </Btn>
  );
};
