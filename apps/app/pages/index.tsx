import { Card, HomeHeader, HomeNav, Layout } from '@wedding/app/components';
import { GiDiamondRing } from 'react-icons/gi';
import { FaGlassCheers } from 'react-icons/fa';
import { BsInfoLg } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { CEREMONY, INFO } from '../constants';
import { API_URL } from '../constants/api-routing';

export function Index() {
  const { push } = useRouter();

  console.log('TEST', API_URL)

  return (
    <Layout>
      <HomeHeader />
      <HomeNav />

      <Card
        onClick={() => push(CEREMONY)}
        text="Segui la cerimonia"
        color="#f87171"
        icon={<GiDiamondRing size={40} color="#FFF" />}
      />
      <br />
      <Card
        text="Vai al banchetto"
        color="#60a5fa"
        icon={<FaGlassCheers size={40} color="#FFF" />}
      />
      <br />
      <Card
        onClick={() => push(INFO)}
        text="Info"
        color="#c084fc"
        icon={<BsInfoLg size={40} color="#FFF" />}
      />
    </Layout>
  );
}

export default Index;
