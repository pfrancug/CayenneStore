import GrassSharp from '@mui/icons-material/GrassSharp';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';

import { logoStyle } from './styles';
import { LoginButton } from 'components';
import { AppName } from 'utils/constants';

export const NavBar: FC = () => (
  <AppBar position="static">
    <Toolbar>
      <GrassSharp fontSize="large" sx={logoStyle} />
      <Typography
        component="div"
        fontWeight="300"
        sx={{ flexGrow: 1, ml: 1 }}
        variant="h4"
      >
        {AppName}
      </Typography>
      <LoginButton />
    </Toolbar>
  </AppBar>
);
