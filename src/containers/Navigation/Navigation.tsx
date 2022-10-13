import {
  AppBar,
  Container,
  LinearProgress,
  Toolbar,
  Typography,
  Box,
  Button,
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

export const Navigation: FC = () => {
  const { isLoading } = useLoadingContext();

  interface PageProps {
    page: string;
    link: string;
  }

  const pages: Array<PageProps> = [
    { page: 'Cultivars', link: '/' },
    { page: 'Seeds', link: '/seeds' },
  ];

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography sx={cayenneStyle}>{AppName.Cayenne}</Typography>
            <Typography sx={storeStyle}>{AppName.Store}</Typography>
            <Box sx={buttonsBoxStyle}>
              {pages.map(({ link, page }) => (
                <Link key={page} style={linkStyle} to={link}>
                  <Button sx={pageButtonStyle}>{page}</Button>
                </Link>
              ))}
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
