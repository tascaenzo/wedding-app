import { useState } from 'react';
import { AccordionProps } from './accordion.interface';
import { Container, Title } from './accordion.styled';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { GRAY_DARK } from '@wedding/app/constants';

export const Accordion = ({ children, title }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Title onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span>
          {isOpen ? (
            <FaAngleDown color={GRAY_DARK} />
          ) : (
            <FaAngleUp color={GRAY_DARK} />
          )}
        </span>
      </Title>
      <div style={{ display: isOpen ? 'flex' : 'none' }}>{children}</div>
    </Container>
  );
};
