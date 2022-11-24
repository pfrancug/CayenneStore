import { SxProps, Theme } from '@mui/material';

import { DrawerWidth } from 'ts/enums';

export const buttonsBoxStyle: SxProps<Theme> = ({ breakpoints, spacing }) => ({
  display: 'flex',

  [breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: spacing(1, 0),
    width: DrawerWidth.Mobile,
  },

  [breakpoints.up('sm')]: {
    flexDirection: 'row',
    order: 2,
  },
});

export const pageButtonStyle: SxProps<Theme> = ({
  breakpoints,
  palette,
  spacing,
}) => ({
  color: palette.common.white,

  [breakpoints.down('sm')]: {
    padding: spacing(1, 2),
    textAlign: 'left',
    width: '100%',
  },

  [breakpoints.up('sm')]: {
    marginRight: spacing(1),
  },
});

export const linkStyle = {
  color: 'inherit',
  height: '100%',
  textDecoration: 'none',
  width: '100%',
};

export const activeLinkStyle = {
  ...linkStyle,
  textDecoration: 'underline',
};
