import { ReactElement } from 'react';

export interface PageProps {
  element: ReactElement;
  isMenuVisible?: true;
  page: string;
  path: string;
}
