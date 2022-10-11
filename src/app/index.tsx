import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from 'realm-web';

import { theme } from './styles';
import { client } from 'apollo';
import { realmConfig } from 'configs';
import { Navigation } from 'containers';
import { LoadingContextProvider, RealmContextProvider } from 'contexts';
import { CultivarsPage, ErrorPage, SeedsPage } from 'pages';

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
                <Route path="/" element={<CultivarsPage />} />
                <Route path="/seeds" element={<SeedsPage />} />
                <Route path="/404" element={<ErrorPage />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </LoadingContextProvider>
      </RealmContextProvider>
    </ApolloProvider>
  );
};
