import { FC } from 'react';
import { Alert, AlertTitle } from '@mui/material';

import { Errors } from 'ts/enums';

interface ErrorAlertProps {
  maxWidth?: number;
  message: string;
}

export const ErrorAlert: FC<ErrorAlertProps> = ({ maxWidth, message }) => (
  <Alert severity="error" sx={{ maxWidth, mb: 3, mx: 'auto' }}>
    <AlertTitle>{Errors.Error}</AlertTitle>
    {message}
  </Alert>
);
