import { HomeCard, HomeHeader, HomeNav, Layout } from '@wedding/app/components';
import { GiDiamondRing } from 'react-icons/gi';
import { FaGlassCheers } from 'react-icons/fa';
import { BsInfoLg } from 'react-icons/bs';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { LOGIN } from '../constants';
import { useEffect } from 'react';

export function Index() {
  const router = useRouter();
  const [cookies] = useCookies(['auth']);

  useEffect(() => {
    if (!cookies.auth) router.push(LOGIN);
  }, [cookies.auth, router]);

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
