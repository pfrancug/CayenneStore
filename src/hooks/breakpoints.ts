import { useMediaQuery, useTheme } from '@mui/material';

export const useIsUpSmBreakPoint = () => {
  const theme = useTheme();
  const isUpSmBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

  return isUpSmBreakpoint;
};
