import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ApolloProvider } from '@apollo/client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { FC } from 'react';
import { App } from 'realm-web';

import { client } from 'apollo';
import { realmConfig } from 'configs';
import { LoadingContextProvider, RealmContextProvider } from 'contexts';
import { GardenPage } from 'pages';

const theme = createTheme({
  palette: {
    common: { black: '#1b1f23' },
    mode: 'dark',
    primary: { dark: '#24292e', main: '#2f363d' },
    text: { primary: '#e1e4e8' },
  },
});

export const AppWrapper: FC = () => {
  const app = new App({
    baseUrl: realmConfig.baseUrl,
    id: realmConfig.appId,
  });

  return (
    <ApolloProvider client={client(app)}>
      <RealmContextProvider app={app}>
        <LoadingContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GardenPage />
          </ThemeProvider>
        </LoadingContextProvider>
      </RealmContextProvider>
    </ApolloProvider>
  );
};
