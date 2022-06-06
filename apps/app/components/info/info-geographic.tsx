import { Container, CardContainer, OutlineBtn } from './info.styled';
import { SiGooglemaps } from 'react-icons/si';

export const InfoGeographic = () => {
  return (
    <Container>
      <strong style={{ paddingLeft: '20px' }}>Cerimonia</strong>
      <CardContainer>
        <p>Martedì 7 Giugno 2022 ore 16.30</p>
        <p>Basilica Cattedrale Maria SS. Annunziata “Duomo” di Acireale</p>
        <br />
        <small>
          <a
            style={{ all: 'unset' }}
            // href="geo:37.6133143732114, 15.16640505034735"
            href="https://www.google.com/maps/place/Basilica+Cattedrale+Maria+SS.ma+Annunziata+-+Acireale/@37.6131189,15.1636156,17z/data=!4m12!1m6!3m5!1s0x1313f90f38bda261:0x4e0a13c86f99fab!2sBasilica+Cattedrale+Maria+SS.ma+Annunziata+-+Acireale!8m2!3d37.6131194!4d15.1658074!3m4!1s0x1313f90f38bda261:0x4e0a13c86f99fab!8m2!3d37.6131194!4d15.1658074"
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
        <p>Enzo e Rosalinda</p>
        <p>
          dopo la cerimonia saranno lieti di ringraziare parenti ed amici presso
          la sala ricevimenti
        </p>
        <br />
        <p>Tenuta Pietra Bianca via Zummo 74 - Giarre</p>
        <br />
        <small>
          <a
            style={{ all: 'unset' }}
            // href="geo:37.6845359,15.1684517"
            href="https://www.google.com/maps/place/Tenuta+PietraBianca/@37.6845972,15.1696912,18.34z/data=!4m5!3m4!1s0x1311585e8100dd45:0x8f584b3c896d6d6!8m2!3d37.6845359!4d15.1706457"
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
