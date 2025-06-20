import { Media } from '@prisma/client';
import { useEffect, useState } from 'react';
import { GalleryImgProps } from './gallery-img.interface';
import {
  Container,
  Img,
  Coll,
  ModalContainer,
  CloseModal,
  ImgModal,
  Btn,
  BtnContainer,
} from './gallery.styled';
import Modal from 'react-modal';
import { VscChromeClose } from 'react-icons/vsc';

// Funzione per verificare se un URL è un file audio
const isAudioUrl = (url: string): boolean => {
  const audioExtensions = [
    '.mp3',
    '.wav',
    '.ogg',
    '.m4a',
    '.aac',
    '.flac',
    '.wma',
  ];
  const lowerUrl = url.toLowerCase();
  return (
    audioExtensions.some((ext) => lowerUrl.includes(ext)) ||
    lowerUrl.includes('audio')
  );
};

// Funzione per verificare se un URL è un'immagine
const isImageUrl = (url: string): boolean => {
  const imageExtensions = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.bmp',
    '.webp',
    '.svg',
  ];
  const lowerUrl = url.toLowerCase();
  return imageExtensions.some((ext) => lowerUrl.includes(ext));
};

export const GalleryImg = ({ data }: GalleryImgProps) => {
  const itemsPage = 15;
  const [index, setIndex] = useState(itemsPage);
  const [coll1, setColl1] = useState<Media[]>([]);
  const [coll2, setColl2] = useState<Media[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState<string>(null);
  const [mediaType, setMediaType] = useState<'image' | 'audio'>('image');

  useEffect(() => {
    const arr1 = [];
    const arr2 = [];

    data.forEach((img, i) => {
      if (i >= index) return;
      i % 2 ? arr2.push(img) : arr1.push(img);
    });

    setColl1(arr1);
    setColl2(arr2);
  }, [data, index]);

  const handleMediaClick = (media: Media) => {
    setIsOpen(true);
    setSrc(media.url);
    setMediaType(isAudioUrl(media.url) ? 'audio' : 'image');
  };

  const renderMediaItem = (media: Media, index: number) => {
    if (isAudioUrl(media.url)) {
      // Rendering per file audio
      return (
        <div
          key={index}
          onClick={() => handleMediaClick(media)}
          style={{
            width: '100%',
            height: '120px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            margin: '8px 0',
            border: '2px solid #e0e0e0',
            transition: 'all 0.3s ease',
            position: 'relative',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#eeeeee';
            e.currentTarget.style.borderColor = '#ccc';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f5f5f5';
            e.currentTarget.style.borderColor = '#e0e0e0';
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '8px' }}>🎵</div>
          <div
            style={{
              fontSize: '12px',
              color: '#666',
              textAlign: 'center',
              padding: '0 8px',
              wordBreak: 'break-word',
            }}
          >
            File Audio
          </div>
        </div>
      );
    } else {
      // Rendering per immagini (comportamento originale)
      return (
        <Img
          onClick={() => handleMediaClick(media)}
          key={index}
          src={media.url}
        />
      );
    }
  };

  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        overlayClassName="modal-overlay"
        style={{
          content: {
            background: 'transparent',
            display: 'flex',
            border: 0,
            padding: 0,
            inset: '20px',
            maxWidth: '95vw',
            maxHeight: '95vh',
            margin: 'auto',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <ModalContainer>
          <CloseModal>
            <VscChromeClose onClick={() => setIsOpen(false)} />
          </CloseModal>

          {mediaType === 'audio' ? (
            // Player audio nella modal
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '12px',
                minWidth: '300px',
              }}
            >
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎵</div>
              <audio
                controls
                autoPlay
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: '50px',
                }}
                preload="metadata"
              >
                <source src={src} />
                Il tuo browser non supporta l'audio.
              </audio>
              <div
                style={{
                  fontSize: '14px',
                  color: '#666',
                  marginTop: '16px',
                  textAlign: 'center',
                }}
              >
                File Audio
              </div>
            </div>
          ) : (
            // Immagine nella modal (comportamento originale)
            <ImgModal
              src={src}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          )}
        </ModalContainer>
      </Modal>

      <Container>
        <Coll>
          {coll1.map((media, index) => renderMediaItem(media, index))}
        </Coll>
        <Coll>
          {coll2.map((media, index) => renderMediaItem(media, index))}
        </Coll>
      </Container>

      <BtnContainer>
        {coll1.length + coll2.length < data.length && (
          <Btn onClick={() => setIndex(index + itemsPage)}>Mostra altro</Btn>
        )}
      </BtnContainer>
      <br />
    </>
  );
};
