import { AppBar, GalleryImg, Layout, UploadImg } from '../components';
import { GET_GALLERY } from '../constants/api-routing';
import { useFetch } from '../hooks/use-fatch';
import React, { useCallback, useEffect, useState } from 'react';
import { Media } from '@prisma/client';

const Gallery = () => {
  const [data, setData] = useState<Media[]>([]);
  const { get } = useFetch();

  const fatchData = useCallback(async () => {
    const media = await get(GET_GALLERY, {});
    setData(media);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(()=> {
    fatchData();
  }, [fatchData])

  return (
    <Layout>
      <AppBar />
      <UploadImg callback={() => fatchData()} />
      <GalleryImg data={data} />
    </Layout>
  );
};

export default Gallery;
