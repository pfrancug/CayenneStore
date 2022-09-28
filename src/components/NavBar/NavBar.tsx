import GrassSharp from '@mui/icons-material/GrassSharp';
import { AppBar, Toolbar, Typography, useTheme } from '@mui/material';
import { FC } from 'react';

import { LoginButton } from 'components';
import { AppName } from 'utils/constants';

export const NavBar: FC = () => {
  const { palette } = useTheme();

  const logoIcon = {
    color: palette.success.main,
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <GrassSharp fontSize="large" sx={logoIcon} />
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
};
