import { VFC } from 'react';
import { Alert, AlertTitle } from '@mui/material';

import { Errors } from 'utils/constants';

interface ErrorAlertProps {
	message: string;
}

export const ErrorAlert: VFC<ErrorAlertProps> = ({ message }) => (
	<Alert severity="error">
		<AlertTitle>{Errors.Error}</AlertTitle>
		{message}
	</Alert>
);
