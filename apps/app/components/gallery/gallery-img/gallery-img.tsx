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

export const GalleryImg = ({ data }: GalleryImgProps) => {
  const itemsPage = 15;
  const [index, setIndex] = useState(itemsPage);
  const [coll1, setColl1] = useState<Media[]>([]);
  const [coll2, setColl2] = useState<Media[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState<string>(null);

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
            inset: '20px', // Margini più piccoli (equivale a top, right, bottom, left: 20px)
            maxWidth: '95vw',
            maxHeight: '95vh',
            margin: 'auto',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Sfondo più scuro per maggiore contrasto
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
        </ModalContainer>
      </Modal>
      <Container>
        <Coll>
          {coll1.map((img, index) => (
            <Img
              onClick={() => {
                setIsOpen(true);
                setSrc(img.url);
              }}
              key={index}
              src={img.url}
            />
          ))}
        </Coll>
        <Coll>
          {coll2.map((img, index) => (
            <Img
              onClick={() => {
                setIsOpen(true);
                setSrc(img.url);
              }}
              key={index}
              src={img.url}
            />
          ))}
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
