import { App, Credentials, DEFAULT_BASE_URL } from 'realm-web';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const getValidAccessToken = async (app: App) => {
  if (!app.currentUser) {
    await app.logIn(Credentials.anonymous());
  } else {
    await app.currentUser.refreshCustomData();
  }

  return app.currentUser?.accessToken;
};

export const client = (app: App) => {
  const uri = `${DEFAULT_BASE_URL}/api/client/v2.0/app/${app.id}/graphql`;

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      fetch: async (uri, init) => {
        const token = await getValidAccessToken(app);
        const options = {
          ...init,
          headers: {
            ...init?.headers,
            Authorization: `Bearer ${token}`,
          },
        };

        return fetch(uri, options);
      },
      uri,
    }),
  });
};
