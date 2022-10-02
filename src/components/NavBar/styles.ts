import { SxProps, Theme } from '@mui/material';

export const logoStyle: SxProps<Theme> = ({ palette }) => ({
  color: palette.success.main,
});

export const cayenneStyle: SxProps<Theme> = ({ palette }) => ({
  color: palette.error.dark,
  fontWeight: 500,
});

export const storeStyle: SxProps<Theme> = ({ palette }) => ({
  color: palette.common.white,
  flexGrow: 1,
  fontWeight: 300,
});
