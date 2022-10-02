import { FC } from 'react';
import { Container, LinearProgress } from '@mui/material';

import { Cultivars, NavBar } from 'components';
import { useLoadingContext } from 'contexts';

export const GardenPage: FC = () => {
  const { isLoading } = useLoadingContext();
  return (
    <>
      <NavBar />
      {isLoading ? <LinearProgress color="warning" /> : null}
      <Container maxWidth="lg">
        <Cultivars />
      </Container>
    </>
  );
};
