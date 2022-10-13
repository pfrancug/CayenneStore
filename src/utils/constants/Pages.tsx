import { Navigate } from 'react-router-dom';

import { CultivarsPage, ErrorPage, SeedsPage } from 'pages';
import { PageProps } from 'ts/interfaces';

export const Pages: Array<PageProps> = [
  { page: 'Cultivars', path: '/', element: <CultivarsPage /> },
  { page: 'Seeds', path: '/seeds', element: <SeedsPage /> },
  { page: 'NotFound', path: '/404', element: <ErrorPage /> },
  { page: 'Redirect', path: '*', element: <Navigate to="/404" replace /> },
];
