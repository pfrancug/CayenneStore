import {
  AppBar,
  Box,
  Button,
  Container,
  LinearProgress,
  Toolbar,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import {
  buttonsBoxStyle,
  cayenneStyle,
  linkStyle,
  pageButtonStyle,
  storeStyle,
} from './styles';
import { LoginButton } from 'components';
import { useLoadingContext } from 'contexts';
import { AppName } from 'ts/enums';
import { Pages } from 'utils/constants';

export const Navigation: FC = () => {
  const { isLoading } = useLoadingContext();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography sx={cayenneStyle}>{AppName.Cayenne}</Typography>
            <Typography sx={storeStyle}>{AppName.Store}</Typography>
            <Box sx={buttonsBoxStyle}>
              {Pages.map(({ isMenuVisible, path, page }) => {
                if (isMenuVisible) {
                  return (
                    <Link key={page} style={linkStyle} to={path}>
                      <Button sx={pageButtonStyle}>{page}</Button>
                    </Link>
                  );
                }

                return null;
              })}
            </Box>
            <LoginButton />
          </Toolbar>
        </Container>
      </AppBar>
      <LinearProgress
        color="success"
        sx={{ visibility: isLoading ? 'visible' : 'hidden' }}
      />
    </>
  );
};
