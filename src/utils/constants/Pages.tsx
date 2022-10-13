import { Navigate } from 'react-router-dom';

import { CultivarsPage, ErrorPage, SeedsPage } from 'pages';
import { PageProps } from 'ts/interfaces';

export const Pages: Array<PageProps> = [
  {
    element: <CultivarsPage />,
    isMenuVisible: true,
    page: 'Cultivars',
    path: '/',
  },
  {
    element: <SeedsPage />,
    isMenuVisible: true,
    page: 'Seeds',
    path: '/seeds',
  },
  {
    element: <ErrorPage />,
    page: 'NotFound',
    path: '/404',
  },
  {
    element: <Navigate to="/404" replace />,
    page: 'Redirect',
    path: '*',
  },
];
