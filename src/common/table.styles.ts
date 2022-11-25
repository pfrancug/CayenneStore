import { SxProps, Theme } from '@mui/material';

export const containerStyle: SxProps<Theme> = ({ breakpoints, spacing }) => ({
  alignSelf: 'center',
  margin: spacing(2, 'auto'),
  maxWidth: 700,
  WebkitBackfaceVisibility: 'hidden',
  WebkitTransform: 'translate3d(0, 0, 0)',

  [breakpoints.down('sm')]: {
    maxHeight: `calc(100vh - 88px)`,
    width: `calc(100% - ${spacing(4)})`,
  },

  [breakpoints.up('sm')]: {
    maxHeight: `calc(100vh - 96px)`,
  },
});

export const tableHeaderStyle: SxProps<Theme> = ({
  palette,
  typography,
  zIndex,
}) => ({
  background: palette.primary.dark,
  borderColor: palette.common.black,
  color: palette.text.primary,
  fontWeight: typography.fontWeightBold,
  textTransform: 'uppercase',

  ':first-of-type': {
    left: 0,
    position: 'sticky',
    zIndex: zIndex.appBar,
  },
});

export const columnHeaderStyle: SxProps<Theme> = ({ palette }) => ({
  background: palette.primary.dark,
  borderColor: palette.common.black,
  color: palette.text.primary,
  left: 0,
  position: 'sticky',
});

export const cellStyle: SxProps<Theme> = ({ palette }) => ({
  background: palette.primary.main,
  borderColor: palette.common.black,
  color: palette.text.primary,
});
