import { SxProps, Theme } from '@mui/material';

export const menuStyle: SxProps<Theme> = ({ breakpoints, spacing }) => ({
  [breakpoints.down('sm')]: {
    order: 1,
  },

  [breakpoints.up('sm')]: {
    marginLeft: spacing(1),
    order: 3,
  },
});

export const logoStyle: SxProps<Theme> = ({
  breakpoints,
  typography,
  spacing,
}) => ({
  display: 'flex',
  flexDirection: 'row',
  fontSize: typography.h4,

  [breakpoints.down('sm')]: {
    margin: spacing(0, 0, 0, 2),
    order: 2,
  },

  [breakpoints.up('sm')]: {
    flexGrow: 1,
    margin: 0,
    order: 1,
  },
});

export const cayenneStyle: SxProps<Theme> = ({ palette, typography }) => ({
  color: palette.error.dark,
  fontSize: 'inherit',
  fontWeight: typography.fontWeightMedium,
});

export const storeStyle: SxProps<Theme> = ({ palette, typography }) => ({
  color: palette.common.white,
  fontSize: 'inherit',
  fontWeight: typography.fontWeightLight,
});
