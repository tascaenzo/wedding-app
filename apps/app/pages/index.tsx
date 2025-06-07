import { Card, HomeHeader, HomeNav, Layout } from '@wedding/app/components';
import { GiDiamondRing } from 'react-icons/gi';
import { FaGlassCheers } from 'react-icons/fa';
import { BsInfoLg } from 'react-icons/bs';
import { BiPhotoAlbum } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { CEREMONY, INFO, PARTY, GALLERY } from '../constants';
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
      <div
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '16px',
          fontSize: '1.2rem',
          textTransform: 'uppercase',
        }}
      >
        <p style={{ paddingBottom: 6 }}>Marco & Aurora</p>
        <p>20.06.2025</p>
      </div>
      <Card
        onClick={() => push(CEREMONY)}
        text="Libretto Cerimonia"
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
        onClick={() => push(GALLERY)}
        text="Galleria"
        color="#31b74a"
        icon={<BiPhotoAlbum size={40} color="#FFF" />}
      />
      <br />
      <Card
        onClick={() => push(INFO)}
        text="Info"
        color="#c084fc"
        icon={<BsInfoLg size={40} color="#FFF" />}
      />
      <br />
      <br />
    </Layout>
  );
}

export default Index;
