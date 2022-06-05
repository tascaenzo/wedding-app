import {
  AppBar,
  Btn,
  BtnContainer,
  InfoCerimonia,
  InfoGeographic,
  Layout,
} from '../components';
import React, { useState } from 'react';

export function Info() {
  const [tab, setTab] = useState(0);
  return (
    <Layout>
      <AppBar />
      <BtnContainer>
        <Btn onClick={() => setTab(0)} selected={tab === 0}>
          Indicazioni
        </Btn>
        <Btn onClick={() => setTab(1)} selected={tab === 1}>
        Cerimonia
        </Btn>
      </BtnContainer>
      <br />
      {tab === 0 && <InfoGeographic />}
      {tab === 1 && <InfoCerimonia />}
    </Layout>
  );
}

export default Info;
