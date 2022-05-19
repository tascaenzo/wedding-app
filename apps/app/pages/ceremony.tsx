import {
  AppBar,
  BtnTab,
  Layout,
  CeremonyPage1,
  CeremonyPage2,
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
          'Orazione coletta',
          'Prima lettura',
          'Salmo responsoriale',
          'Seconda lettura',
          'Canto al vangelo',
          'Liturgiua del matrimonio',
        ]}
      >
        <CeremonyPage1 />
        <CeremonyPage2 />
      </BtnTab>
    </Layout>
  );
}

export default Ceremony;
