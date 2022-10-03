import { FC } from 'react';
import { Container, LinearProgress } from '@mui/material';

import { Cultivars, NavBar } from 'components';
import { useLoadingContext } from 'contexts';

export const GardenPage: FC = () => {
  const { isLoading } = useLoadingContext();
  return (
    <>
      <NavBar />
      <LinearProgress
        color="success"
        sx={{ visibility: isLoading ? 'visible' : 'hidden' }}
      />
      <Container maxWidth="lg">
        <Cultivars />
      </Container>
    </>
  );
};
