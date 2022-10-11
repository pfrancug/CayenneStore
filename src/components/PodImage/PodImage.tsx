import { FC, useEffect, useState } from 'react';
import {
  SxProps,
  Theme,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { Maybe } from 'schemas';

interface PodImageProps {
  binData?: Maybe<string>;
  name?: Maybe<string>;
}

export const imageStyle: SxProps<Theme> = () => ({
  borderRadius: 2,
  height: 150,
  margin: '0 auto',
  overflow: 'hidden',
  width: 150,
});

export const iconButtonStyle: SxProps<Theme> = ({ palette, spacing }) => ({
  color: palette.primary.dark,
  margin: spacing(1),
});

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
        <img alt={name} src={image} loading="lazy" />
        <ImageListItemBar
          sx={{ background: 'transparent' }}
          position="top"
          actionIcon={
            <IconButton
              sx={iconButtonStyle}
              aria-label={`open in new tab - ${name}`}
              href={image}
              target="_blank"
              size="small"
            >
              <OpenInNewIcon fontSize="inherit" />
            </IconButton>
          }
          actionPosition="right"
        />
      </ImageListItem>
    );
  }

  return null;
};
