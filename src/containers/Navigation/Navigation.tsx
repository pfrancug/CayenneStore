import {
  AppBar,
  Box,
  Container,
  Divider,
  IconButton,
  LinearProgress,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu, Person, PersonOutline } from '@mui/icons-material';
import { FC, useState } from 'react';

import { cayenneStyle, logoStyle, menuStyle, storeStyle } from './styles';
import { Links, LoginPanel } from 'components';
import { useLoadingContext } from 'contexts';
import { useBreakpoints, useUser } from 'hooks';
import { AppName } from 'ts/enums';

export const Navigation: FC = () => {
  const { isUpSmBreakpoint } = useBreakpoints();
  const { isLoading } = useLoadingContext();
  const { isLocalUser } = useUser();
  const [isDrawerOpen, setIsDraweOpen] = useState(false);

  const handleDrawerState = () => {
    setIsDraweOpen((prevState) => !prevState);
  };

  const Icon: FC = () => {
    if (!isUpSmBreakpoint) {
      return <Menu />;
    } else if (isLocalUser) {
      return <Person />;
    } else {
      return <PersonOutline />;
    }
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerState}
              sx={menuStyle}
            >
              <Icon />
            </IconButton>

            <Box sx={logoStyle}>
              <Typography sx={cayenneStyle}>{AppName.Cayenne}</Typography>
              <Typography sx={storeStyle}>{AppName.Store}</Typography>
            </Box>

            {isUpSmBreakpoint ? <Links /> : null}
          </Toolbar>
        </Container>
        <SwipeableDrawer
          anchor="left"
          onClose={handleDrawerState}
          onOpen={handleDrawerState}
          open={isDrawerOpen}
        >
          {isUpSmBreakpoint ? null : (
            <>
              <Links />
              <Divider sx={{ flexGrow: 1 }} />
            </>
          )}

          <LoginPanel onLoginSuccess={handleDrawerState} />
        </SwipeableDrawer>
      </AppBar>
      <LinearProgress
        color="success"
        sx={{ visibility: isLoading ? 'visible' : 'hidden' }}
      />
    </>
  );
};
