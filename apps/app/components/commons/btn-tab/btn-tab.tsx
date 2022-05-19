import { useState } from 'react';
import { BtnTabProps } from './btn-tab.interface';
import {
  Btn,
  BtnContainer,
  Container,
} from './btn-tab.styled';

export const BtnTab = ({ children, tabs }: BtnTabProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Container>
      <BtnContainer>
        {tabs.map((tab, index) => (
          <Btn
            selected={index === selectedTab}
            onClick={() => setSelectedTab(index)}
            key={index}
          >
            {tab}
          </Btn>
        ))}
      </BtnContainer>
      <br />
      {children[selectedTab]}
    </Container>
  );
};
