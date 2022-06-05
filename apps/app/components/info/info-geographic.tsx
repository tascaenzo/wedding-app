import { Container, CardContainer, OutlineBtn } from './info.styled';
import { SiGooglemaps } from 'react-icons/si';

export const InfoGeographic = () => {
  return (
    <Container>
      <strong style={{ paddingLeft: '20px' }}>Cermonia</strong>
      <CardContainer>
        <p>Martedi 7 Giugno 2022 ore 16.30</p>
        <p>Basilica Cattedrale Maria SS. Annunziata “Duomo” di Acireale</p>
        <br />
        <small>
          <a
            style={{ all: 'unset' }}
            href="geo:37.6133143732114, 15.16640505034735"
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
        <p>Enzo e Rsosalinda</p>
        <p>
          dopo la cerimonia saranno lieti di ringrazziare partecipanti ed amici
          oresso la sala ricevimenti
        </p>
        <br />
        <p>Tenuta Pietra Bianca via summo 74 - Giarre</p>
        <br />
        <small>
          <a
            style={{ all: 'unset' }}
            href="geo:37.6845359,15.1684517"
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
