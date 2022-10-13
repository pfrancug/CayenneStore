import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from 'realm-web';

import { theme } from './styles';
import { client } from 'apollo';
import { realmConfig } from 'configs';
import { Navigation } from 'containers';
import { Pages } from 'utils/constants';
import { LoadingContextProvider, RealmContextProvider } from 'contexts';

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
            <BrowserRouter>
              <Navigation />
              <Routes>
                {Pages.map(({ page, path, element }) => (
                  <Route key={page} path={path} element={element} />
                ))}
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </LoadingContextProvider>
      </RealmContextProvider>
    </ApolloProvider>
  );
};
