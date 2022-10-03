import { Alert, Button, Dialog, DialogContent, TextField } from '@mui/material';
import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Credentials, MongoDBRealmError } from 'realm-web';

import { alertStyle, inputStyle, submitStyle } from './styles';
import { useRealmContext } from 'contexts';
import { Errors, Login } from 'utils/constants';

interface LoginModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const LoginDialog: FC<LoginModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const { app, setCurrentUser } = useRealmContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [loginError, setLoginError] = useState<null | string>(null);

  useEffect(() => {
    const condition = email.length > 0 && password.length > 0 && !loginError;
    setIsSubmitEnabled(condition);
  }, [email, loginError, password]);

  const handleCloseDialog = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmail(event.target.value.toLowerCase());
    setLoginError(null);
  };

  const handlePasswordChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPassword(event.target.value);
    setLoginError(null);
  };

  const handleLogIn = async () => {
    try {
      await app.logIn(Credentials.emailPassword(email, password));
      setIsModalOpen(false);
      setCurrentUser(app.currentUser);
    } catch (error) {
      if (error instanceof MongoDBRealmError) {
        setLoginError(error.error ?? error.message);
      } else {
        setLoginError(Errors.UnknownError);
      }
    }
  };

  return (
    <Dialog onClose={handleCloseDialog} open={isModalOpen}>
      <DialogContent sx={{ width: 300 }}>
        <TextField
          color="success"
          fullWidth
          label={Login.Login}
          onChange={(event) => handleEmailChange(event)}
          sx={inputStyle}
          type="email"
          value={email}
          variant="outlined"
        />

        <TextField
          color="success"
          fullWidth
          label={Login.Password}
          onChange={(event) => handlePasswordChange(event)}
          sx={inputStyle}
          type="password"
          value={password}
          variant="outlined"
        />

        {loginError ? (
          <Alert severity="error" sx={alertStyle} variant="filled">
            {loginError}
          </Alert>
        ) : null}

        <Button
          color="success"
          disabled={!isSubmitEnabled}
          onClick={handleLogIn}
          sx={submitStyle}
          variant="contained"
        >
          {Login.SignIn}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
