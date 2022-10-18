import { FC, useEffect, useState } from 'react';
import { ImageListItem, Link } from '@mui/material';

import { imageStyle } from './styles';
import { Maybe } from 'schemas';

interface PodImageProps {
  binData?: Maybe<string>;
  name?: Maybe<string>;
}

export const PodImage: FC<PodImageProps> = ({ binData, name }) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (binData && name) {
      fetch(binData)
        .then((data) => data.blob())
        .then((blob) => new File([blob], name, { type: 'image/jpeg' }))
        .then((file) => URL.createObjectURL(file))
        .then((url) => setImage(url));
    }
  }, [binData, name]);

  if (image && name) {
    return (
      <Link href={image} target="_blank">
        <ImageListItem key={image} sx={imageStyle}>
          <img alt={name} src={image} />
        </ImageListItem>
      </Link>
    );
  }

  return null;
};
