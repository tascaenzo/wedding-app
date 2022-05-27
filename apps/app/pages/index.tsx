import { Card, HomeHeader, HomeNav, Layout } from '@wedding/app/components';
import { GiDiamondRing } from 'react-icons/gi';
import { FaGlassCheers } from 'react-icons/fa';
import { BsInfoLg } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { CEREMONY, INFO, PARTY } from '../constants';
import useMessageCount from '@wedding/app/hooks/use-message-count';

export function Index() {
  const { push } = useRouter();
  const { messageCount, notificationCount } = useMessageCount();

  return (
    <Layout>
      <HomeHeader />
      <HomeNav
        notificationCount={notificationCount}
        messageCount={messageCount}
      />
      <Card
        onClick={() => push(CEREMONY)}
        text="Segui la cerimonia"
        color="#f87171"
        icon={<GiDiamondRing size={40} color="#FFF" />}
      />
      <br />
      <Card
        onClick={() => push(PARTY)}
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
