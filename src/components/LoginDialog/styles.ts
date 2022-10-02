import { SxProps, Theme } from '@mui/material';

export const inputStyle: SxProps<Theme> = ({ spacing }) => ({
  marginBottom: spacing(2),

  '& input:-webkit-autofill': {
    transition: 'all 600000s 0s',
  },

  '& input:-internal-autofill-selected': {
    transition: 'all 600000s 0s',
  },
});

export const alertStyle: SxProps<Theme> = ({ spacing }) => ({
  justifyContent: 'center',
  marginBottom: spacing(2),
});

export const submitStyle = {
  width: '100%',
};
