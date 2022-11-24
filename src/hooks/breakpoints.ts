import { useMediaQuery, useTheme } from '@mui/material';

export const useIsUpSmBreakpoint = () => {
  const theme = useTheme();
  const isUpSmBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  return isUpSmBreakpoint;
};
