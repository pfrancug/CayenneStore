import { SxProps, Theme } from '@mui/material';

export const containerStyle: SxProps<Theme> = ({ spacing }) => ({
  padding: spacing(2),
});

export const gridContainerStyle: SxProps<Theme> = () => ({
  margin: 'auto',
  maxWidth: 700,
});

export const gridStyle: SxProps<Theme> = () => ({
  alignItems: 'flex-end',
  display: 'flex',
});

export const inputStyle: SxProps<Theme> = () => ({
  width: '100%',

  '& input:-webkit-autofill': {
    transition: 'all 600000s 0s',
  },

  '& input:-internal-autofill-selected': {
    transition: 'all 600000s 0s',
  },
});

export const submitStyle = {
  height: '100%',
  width: '100%',
};
