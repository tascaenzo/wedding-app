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
} from './gallery.styled';
import Modal from 'react-modal';
import { VscChromeClose } from 'react-icons/vsc';

export const GalleryImg = ({ data }: GalleryImgProps) => {
  const [coll1, setColl1] = useState<Media[]>([]);
  const [coll2, setColl2] = useState<Media[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState<string>(null);

  useEffect(() => {
    const arr1 = [],
      arr2 = [];
    data.map((img, index) => {
      index % 2 ? arr2.push(img) : arr1.push(img);
    });
    setColl1(arr1);
    setColl2(arr2);
  }, [data]);

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
          },
        }}
      >
        <ModalContainer>
          <CloseModal>
            <VscChromeClose onClick={() => setIsOpen(false)} />
          </CloseModal>
          <ImgModal src={src} />
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
    </>
  );
};
