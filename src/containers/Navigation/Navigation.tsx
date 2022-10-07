import { FC, ReactNode } from 'react';
import {
  AppBar,
  Container,
  LinearProgress,
  Toolbar,
  Typography,
} from '@mui/material';

import { cayenneStyle, storeStyle } from './styles';
import { AppName } from 'utils/constants';
import { LoginButton } from 'components';
import { useLoadingContext } from 'contexts';

interface NavigationProps {
  children: ReactNode;
}

export const Navigation: FC<NavigationProps> = ({ children }) => {
  const { isLoading } = useLoadingContext();
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography sx={cayenneStyle} variant="h4">
              {AppName.Cayenne}
            </Typography>
            <Typography sx={storeStyle} variant="h4">
              {AppName.Store}
            </Typography>
            <LoginButton />
          </Toolbar>
        </Container>
      </AppBar>
      <LinearProgress
        color="success"
        sx={{ visibility: isLoading ? 'visible' : 'hidden' }}
      />
      <Container maxWidth="lg">{children}</Container>
    </>
  );
};
