import { WHITE } from '@wedding/app/constants';
import { API_URL, UPLOAD_PHOTO } from '@wedding/app/constants/api-routing';
import React, { useRef } from 'react';
import { useCookies } from 'react-cookie';
import { MdMotionPhotosOn } from 'react-icons/md';
import { UploadImgProps } from './upload-img.interface';
import { Circle, Container, Text } from './upload-img.styled';

export const UploadImg = ({ callback }: UploadImgProps) => {
  const [cookies] = useCookies(['auth']);
  const inputRef = useRef(null);

  const handleFileInput = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('userId', cookies.auth?.id);

    await fetch(API_URL + UPLOAD_PHOTO, {
      method: 'POST',
      credentials: 'same-origin',
      body: formData,
    });
    callback();
  };

  return (
    <Container onClick={() => inputRef.current.click()}>
      <input
        ref={inputRef}
        style={{ display: 'none' }}
        accept="image/*"
        type="file"
        onChange={handleFileInput}
      />
      <Circle>
        <MdMotionPhotosOn size={26} color={WHITE} />
      </Circle>
      <Text>Scatta una foto</Text>
    </Container>
  );
};
