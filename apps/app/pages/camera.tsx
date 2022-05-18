import { useEffect, useState } from 'react';
import Camera from 'react-html5-camera-photo';

export default function Test() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return <></>;

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  return (
    <Camera
      onTakePhoto={(dataUri) => {
        handleTakePhoto(dataUri);
      }}
    />
  );
}
