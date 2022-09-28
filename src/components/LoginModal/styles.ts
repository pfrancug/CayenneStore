import { SxProps, Theme } from '@mui/material';

export const boxStyle: SxProps<Theme> = ({ palette }) => ({
  bgcolor: 'background.paper',
  border: `2px solid ${palette.grey[900]}`,
  borderRadius: 2,
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'column',
  left: '50%',
  padding: 2,
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,

  '&:focus-visible': {
    outline: 'none',
  },
});

export const inputStyle: SxProps<Theme> = ({ spacing }) => ({
  margin: `${spacing(1)} 0`,

  '& input': {
    textAlign: 'center',
  },

  '& input:-webkit-autofill': {
    transition: 'all 600000s 0s',
  },

  '& input:-internal-autofill-selected': {
    transition: 'all 600000s 0s',
  },
});

export const submitStyle: SxProps<Theme> = ({ palette, spacing }) => ({
  alignSelf: 'center',
  color: palette.success.main,
  margin: `${spacing(1)} 0`,
  transitionDuration: 500,
  transitionProperty: 'color',
  width: 'fit-content',
});

export const alertStyle: SxProps<Theme> = ({ spacing }) => ({
  justifyContent: 'center',
  margin: `${spacing(1)} 0`,
});
