import { Card, HomeHeader, HomeNav, Layout } from '@wedding/app/components';
import { GiDiamondRing } from 'react-icons/gi';
import { FaGlassCheers } from 'react-icons/fa';
import { BsInfoLg } from 'react-icons/bs';
import { BiPhotoAlbum } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CEREMONY, INFO, PARTY, GALLERY } from '../constants';
import useMessageCount from '@wedding/app/hooks/use-message-count';

export function Index() {
  const { push } = useRouter();
  const { messageCount, notificationCount } = useMessageCount();
  const [showPdfModal, setShowPdfModal] = useState(false);

  const handleCeremonyClick = () => {
    setShowPdfModal(true);
  };

  const closePdfModal = () => {
    setShowPdfModal(false);
  };

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
        onClick={handleCeremonyClick}
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

      {/* PDF Modal */}
      {showPdfModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header con pulsante chiudi */}
          <div
            style={{
              backgroundColor: '#fff',
              padding: '12px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #e5e5e5',
            }}
          >
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>
              Libretto Cerimonia
            </h3>
            <button
              onClick={closePdfModal}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IoClose size={24} color="#333" />
            </button>
          </div>

          {/* Contenitore PDF */}
          <div style={{ flex: 1, backgroundColor: '#fff' }}>
            <iframe
              src="https://drive.google.com/file/d/17K7Er2Wb-PBtRzvOCcOiFlbagvyH692G/preview"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              title="Libretto Cerimonia"
              allow="autoplay"
            />
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Index;
