import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from 'realm-web';

import { theme } from './styles';
import { client } from 'apollo';
import { realmConfig } from 'configs';
import { LoadingContextProvider, RealmContextProvider } from 'contexts';
import { Navigation } from 'containers';
import { CultivarsPage, ErrorPage } from 'pages';

const router = createBrowserRouter([
  { path: '/', element: <CultivarsPage />, errorElement: <ErrorPage /> },
]);

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
            <Navigation>
              <RouterProvider router={router} />
            </Navigation>
          </ThemeProvider>
        </LoadingContextProvider>
      </RealmContextProvider>
    </ApolloProvider>
  );
};
