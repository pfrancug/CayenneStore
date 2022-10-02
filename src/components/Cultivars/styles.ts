import { SxProps, Theme } from '@mui/material';

export const containerStyle: SxProps<Theme> = ({ spacing }) => ({
  alignSelf: 'center',
  margin: `${spacing(3)} auto`,
  maxHeight: `calc(100vh - 280px)`,
  maxWidth: 700,
});
