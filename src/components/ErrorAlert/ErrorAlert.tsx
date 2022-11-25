import { Alert, AlertTitle } from '@mui/material';
import { FC } from 'react';

import { Errors } from 'ts/enums';

interface ErrorAlertProps {
  maxWidth?: number;
  message: string;
}

export const ErrorAlert: FC<ErrorAlertProps> = ({ maxWidth, message }) => (
  <Alert severity="error" sx={{ maxWidth, mx: 'auto', my: 2 }}>
    <AlertTitle>{Errors.Error}</AlertTitle>
    {message}
  </Alert>
);
