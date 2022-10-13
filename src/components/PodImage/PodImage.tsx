import { FC, useEffect, useState } from 'react';
import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { ImageBarStyle, iconButtonStyle, imageStyle } from './styles';
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
      <ImageListItem key={image} sx={imageStyle}>
        <img alt={name} loading="lazy" src={image} />
        <ImageListItemBar
          actionIcon={
            <IconButton
              href={image}
              size="small"
              sx={iconButtonStyle}
              target="_blank"
            >
              <OpenInNewIcon fontSize="inherit" />
            </IconButton>
          }
          actionPosition="right"
          position="top"
          sx={ImageBarStyle}
        />
      </ImageListItem>
    );
  }

  return null;
};
