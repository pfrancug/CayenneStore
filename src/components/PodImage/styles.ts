import { SxProps, Theme } from '@mui/material';

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

export const ImageBarStyle: SxProps<Theme> = ({ palette, spacing }) => ({
  background: 'transparent',
});
