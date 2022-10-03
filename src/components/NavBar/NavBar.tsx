import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';

import { cayenneStyle, storeStyle } from './styles';
import { LoginButton } from 'components';
import { AppName } from 'utils/constants';

export const NavBar: FC = () => (
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
);
