import { FC } from 'react';
import WhatshotTwoToneIcon from '@mui/icons-material/WhatshotTwoTone';
import { Box, Button, Link, Typography } from '@mui/material';

import {
  boxStyle,
  codeStyle,
  fourStyle,
  iconStyle,
  subtitleStyle,
  titleStyle,
} from './styles';
import { NotFound } from 'utils/constants';

export const ErrorPage: FC = () => (
  <Box sx={boxStyle}>
    <Typography sx={titleStyle}>{NotFound.Title}</Typography>
    <Box sx={codeStyle}>
      <Typography sx={fourStyle}>4</Typography>
      <WhatshotTwoToneIcon sx={iconStyle} />
      <Typography sx={fourStyle}>4</Typography>
    </Box>
    <Typography sx={subtitleStyle}>{NotFound.Subtitle}</Typography>
    <Link href="/" underline="none">
      <Button variant="contained" color="primary">
        {NotFound.ReturnButton}
      </Button>
    </Link>
  </Box>
);
