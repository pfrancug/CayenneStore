import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from 'realm-web';

import { theme } from './styles';
import { client } from 'apollo';
import { Navigation } from 'containers';
import { Pages } from 'utils/constants';
import { LoadingContextProvider, RealmContextProvider } from 'contexts';

export const AppWrapper: FC = () => {
  const app = new App({ id: process.env.REACT_APP_ID ?? '' });

  return (
    <ApolloProvider client={client(app)}>
      <RealmContextProvider app={app}>
        <LoadingContextProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <BrowserRouter>
                <Navigation />
                <Routes>
                  {Pages.map(({ element, page, path }) => (
                    <Route element={element} key={page} path={path} />
                  ))}
                </Routes>
              </BrowserRouter>
            </ThemeProvider>
          </LocalizationProvider>
        </LoadingContextProvider>
      </RealmContextProvider>
    </ApolloProvider>
  );
};
