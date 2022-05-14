import { HomeCard, HomeHeader, HomeNav, Layout } from '@wedding/app/components';
import { BsInfoLg } from 'react-icons/bs';
import { GiDiamondRing } from 'react-icons/gi';
import { FaGlassCheers } from 'react-icons/fa';

export function Index() {
  return (
    <Layout>
      <HomeHeader />
      <HomeNav />

      <HomeCard
        text="Segui la cermonia"
        color="#f87171"
        icon={<GiDiamondRing size={40} color="#FFF" />}
      />
      <br />
      <HomeCard
        text="Segui la cermonia"
        color="#60a5fa"
        icon={<FaGlassCheers size={40} color="#FFF" />}
      />
      <br />
      <HomeCard
        text="Segui la cermonia"
        color="#c084fc"
        icon={<BsInfoLg size={40} color="#FFF" />}
      />
    </Layout>
  );
}

export default Index;
