import {
  AppBar,
  Btn,
  BtnContainer,
  ImageContainer,
  InfoCermonia,
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
          Cermonia
        </Btn>
        <Btn onClick={() => setTab(1)} selected={tab === 1}>
          Ristorante
        </Btn>
      </BtnContainer>
      <br />
      {tab === 0 && <InfoCermonia />}
      {/* <ImageContainer
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/photos/acireale-the-duomo-and-the-church-basilica-dei-santi-pietro-e-paolo-picture-id1256741228")',
        }}
      /> */}
    </Layout>
  );
}

export default Info;
