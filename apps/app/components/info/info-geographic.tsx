import { Container, CardContainer, OutlineBtn } from './info.styled';
import { SiGooglemaps } from 'react-icons/si';

export const InfoGeographic = () => {
  return (
    <Container>
      <strong style={{ paddingLeft: '20px' }}>Cerimonia</strong>
      <CardContainer>
        <p>Martedì 20 Giugno 2025 ore 16.30</p>
        <p>
          Basilica Collegiata dei Santi Apostoli Pietro e Paolo Acireale (CT)
        </p>
        <br />
        <small>
          <a
            style={{ all: 'unset' }}
            href="https://maps.app.goo.gl/chYP4EJZDFTSqLAS6?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noreferrer"
          >
            <OutlineBtn>
              <span>Indicazioni stradali</span>
              <SiGooglemaps size={16} />
            </OutlineBtn>
          </a>
        </small>
        <br />
      </CardContainer>
      <strong style={{ paddingLeft: '20px' }}>Banchetto</strong>
      <CardContainer>
        <p>Marco e Aurora</p>
        <p>
          dopo la cerimonia saranno lieti di ringraziare parenti ed amici presso
          la sala ricevimenti
        </p>
        <br />
        <p>La Casa del Grecale Via Santa Caterina 51 - Acireale</p>
        <br />
        <small>
          <a
            style={{ all: 'unset' }}
            href="https://maps.app.goo.gl/Nyg465HzyqnygnqL7?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noreferrer"
          >
            <OutlineBtn>
              <span>Indicazioni stradali</span>
              <SiGooglemaps size={16} />
            </OutlineBtn>
          </a>
        </small>
        <br />
      </CardContainer>
    </Container>
  );
};
