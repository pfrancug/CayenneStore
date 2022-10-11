import { SxProps, Theme } from '@mui/material';

export const logoStyle: SxProps<Theme> = ({ palette }) => ({
  color: palette.success.main,
});

export const cayenneStyle: SxProps<Theme> = ({ palette, typography }) => ({
  color: palette.error.dark,
  fontWeight: typography.fontWeightMedium,
});

export const storeStyle: SxProps<Theme> = ({
  palette,
  spacing,
  typography,
}) => ({
  color: palette.common.white,
  fontWeight: typography.fontWeightLight,
  marginRight: spacing(4),
});

export const buttonsBoxStyle: SxProps<Theme> = ({ breakpoints }) => ({
  flexGrow: 1,
  display: 'flex',

  [breakpoints.down('sm')]: {
    display: 'none',
  },
});

export const pageButtonStyle: SxProps<Theme> = ({ palette, spacing }) => ({
  color: palette.common.white,
  marginRight: spacing(1),
  padding: 0,
});
