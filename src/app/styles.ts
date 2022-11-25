import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    background: { default: '#1b1f23', paper: '#24292e' },
    common: { black: '#1b1f23', white: '#e1e4e8' },
    error: { dark: '#cb2431', light: '#fdaeb7', main: '#ea4a5a' },
    info: { dark: '#005cc5', light: '#c8e1ff', main: '#2188ff' },
    mode: 'dark',
    primary: { dark: '#24292e', light: '#444d56', main: '#2f363d' },
    success: { dark: '#22863a', light: '#bef5cb', main: '#34d058' },
    text: { primary: '#e1e4e8' },
  },
});
