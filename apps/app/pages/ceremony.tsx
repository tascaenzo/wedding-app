import {
  AppBar,
  BtnTab,
  Layout,
  CeremonyPage1,
  CeremonyPage2,
  CeremonyPage3,
  CeremonyPage4,
  CeremonyPage5,
  CeremonyPage6,
  CeremonyPage7,
  CeremonyPage8,
  CeremonyPage9,
  CeremonyPage10,
  CeremonyPage11,
  CeremonyPage12,
  CeremonyPage13,
  CeremonyPage14,
} from '../components';

export function Ceremony() {
  return (
    <Layout>
      <AppBar />
      <BtnTab
        tabs={[
          "Canto d'ingresso",
          'Riti di introduzione',
          'Canto di aspersione',
          'I Lettura',
          'Salmo',
          'II Lettura',
          'Vangelo',
          'Liturgiua del matrimonio',
          'Preghiera dei fedeli',
          'Presentazione dei doni',
          'Preghiera Eucaristica',
          'Canti di comunione',
          'Riti di conclusione',
          'Canto finale',
        ]}
      >
        <CeremonyPage1 />
        <CeremonyPage2 />
        <CeremonyPage3 />
        <CeremonyPage4 />
        <CeremonyPage5 />
        <CeremonyPage6 />
        <CeremonyPage7 />
        <CeremonyPage8 />
        <CeremonyPage9 />
        <CeremonyPage10 />
        <CeremonyPage11 />
        <CeremonyPage12 />
        <CeremonyPage13 />
        <CeremonyPage14 />
      </BtnTab>
    </Layout>
  );
}

export default Ceremony;
