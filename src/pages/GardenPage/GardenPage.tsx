import { VFC } from 'react';
import { Container, LinearProgress } from '@mui/material';

import { Cultivars, NavBar } from 'components';
import { useLoadingContext } from 'contexts';

export const GardenPage: VFC = () => {
	const { isLoading } = useLoadingContext();
	return (
		<>
			<NavBar />
			{isLoading ? <LinearProgress color="success" /> : null}
			<Container maxWidth="lg">
				<Cultivars />
			</Container>
		</>
	);
};
