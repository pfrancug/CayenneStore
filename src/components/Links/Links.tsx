import { Box, Button } from '@mui/material';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import {
  activeLinkStyle,
  buttonsBoxStyle,
  linkStyle,
  pageButtonStyle,
} from './styles';
import { Pages } from 'utils/constants';

export const Links: FC = () => {
  const { pathname } = useLocation();

  return (
    <Box sx={buttonsBoxStyle}>
      {Pages.map(({ isMenuVisible, path, page }) => {
        if (isMenuVisible) {
          return (
            <Button
              disabled={path === pathname}
              key={page}
              sx={pageButtonStyle}
              variant="text"
            >
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : linkStyle
                }
                to={path}
              >
                {page}
              </NavLink>
            </Button>
          );
        }

        return null;
      })}
    </Box>
  );
};
