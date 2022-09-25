import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ApolloProvider } from '@apollo/client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import { VFC } from 'react';
import { App } from 'realm-web';

import { client } from 'apollo';
import { NavBar } from 'components';
import { realmConfig } from 'configs';
import { RealmContextProvider } from 'contexts';

const theme = createTheme({
	palette: {
		mode: 'dark',
		success: {
			main: lightGreen.A200,
		},
	},
});

export const GardenPage: VFC = () => {
	const app = new App({
		baseUrl: realmConfig.baseUrl,
		id: realmConfig.appId,
	});

	return (
		<ThemeProvider theme={theme}>
			<RealmContextProvider app={app}>
				<ApolloProvider client={client(app)}>
					<CssBaseline />
					<NavBar />
				</ApolloProvider>
			</RealmContextProvider>
		</ThemeProvider>
	);
};
