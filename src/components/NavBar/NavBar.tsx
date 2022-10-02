import { AppBar, Chip, Container, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';

import { cayenneStyle, storeStyle } from './styles';
import { LoginButton } from 'components';
import { useRealmContext } from 'contexts';
import { AppName, Login, ProviderTypes } from 'utils/constants';

export const NavBar: FC = () => {
  const { currentUser } = useRealmContext();

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography sx={cayenneStyle} variant="h4">
            {AppName.Cayenne}
          </Typography>
          <Typography sx={storeStyle} variant="h4">
            {AppName.Store}
          </Typography>
          {currentUser?.providerType === ProviderTypes.AnonUser ? (
            <Chip
              color="info"
              label={Login.Anonymous}
              size="small"
              variant="outlined"
              sx={{ px: 1, mr: 4 }}
            />
          ) : null}
          <LoginButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
