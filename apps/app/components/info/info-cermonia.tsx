import { Center } from '../ceremony/ceremony.styled';
import { Container } from './info.styled';

export const InfoCermonia = () => {
  return (
    <Container>
      <Center>
        <strong>Enzo & Rosalinda </strong>
        <br />
        <p style={{ paddingTop: '8px' }}>annunciano il loro matrimonio </p>
        <p style={{ paddingTop: '8px' }}>che sarà celebrato</p>
        <p style={{ paddingTop: '8px' }}>
          Martedi 7 Giugno 2022 alle ore 16.30{' '}
        </p>
        <p style={{ paddingTop: '8px' }}>
          nella Basilica Cattedrale Maria SS. Anunziata{' '}
        </p>
        <p style={{ paddingTop: '8px' }}>&quot;Dumo di Acireale&quot;</p>
      </Center>
      <small>Api su maps</small>

    </Container>
  );
};
