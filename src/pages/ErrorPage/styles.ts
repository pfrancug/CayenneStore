import { SxProps, Theme } from '@mui/material';

export const boxStyle: SxProps<Theme> = ({ spacing }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  margin: `${spacing(15)} auto`,
  width: 'fit-content',
});

export const titleStyle: SxProps<Theme> = ({
  palette,
  spacing,
  typography,
}) => ({
  color: palette.text.primary,
  fontSize: typography.h5,
  fontWeight: typography.fontWeightLight,
  marginBottom: spacing(4),
});

export const codeStyle: SxProps<Theme> = () => ({
  display: 'flex',
});

export const fourStyle: SxProps<Theme> = ({ palette, typography }) => ({
  color: palette.error.dark,
  fontSize: typography.h1,
  fontWeight: typography.fontWeightBold,
});

export const iconStyle: SxProps<Theme> = ({ palette, typography }) => ({
  color: palette.error.dark,
  fontSize: typography.h1,
  fontWeight: typography.fontWeightBold,
});

export const subtitleStyle: SxProps<Theme> = ({
  palette,
  spacing,
  typography,
}) => ({
  color: palette.primary.main,
  fontSize: typography.h6,
  fontWeight: typography.fontWeightRegular,
  marginBottom: spacing(4),
  textTransform: 'uppercase',
});
