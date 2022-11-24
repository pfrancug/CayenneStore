import { SxProps, Theme } from '@mui/material';

import { DrawerWidth } from 'ts/enums';

export const boxStyle: SxProps<Theme> = ({ breakpoints, spacing }) => ({
  padding: spacing(2),

  [breakpoints.down('sm')]: {
    width: DrawerWidth.Mobile,
  },

  [breakpoints.up('sm')]: {
    width: DrawerWidth.Desktop,
  },
});

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
