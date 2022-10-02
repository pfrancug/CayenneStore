import { FC } from 'react';
import { Alert, AlertTitle } from '@mui/material';

import { Errors } from 'utils/constants';

interface ErrorAlertProps {
  maxWidth?: number;
  message: string;
}

export const ErrorAlert: FC<ErrorAlertProps> = ({ maxWidth, message }) => (
  <Alert severity="error" sx={{ maxWidth, mx: 'auto', mb: 3 }}>
    <AlertTitle>{Errors.Error}</AlertTitle>
    {message}
  </Alert>
);
