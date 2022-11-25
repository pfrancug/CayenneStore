import { Alert, Box, Button, TextField } from '@mui/material';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Credentials, MongoDBRealmError } from 'realm-web';

import { alertStyle, boxStyle, inputStyle, submitStyle } from './styles';
import { useRealmContext } from 'contexts';
import { useUser } from 'hooks';
import { Errors, Login } from 'ts/enums';

interface LoginModalProps {
  onLoginSuccess: () => void;
}

export const LoginPanel: FC<LoginModalProps> = ({ onLoginSuccess }) => {
  const { app, currentUser, setCurrentUser } = useRealmContext();
  const { isAnonUser, isLocalUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [loginError, setLoginError] = useState<null | string>(null);

  useEffect(() => {
    const condition =
      (email.length > 0 && password.length > 0 && !loginError) || isLocalUser;
    setIsSubmitEnabled(condition);
  }, [email, isLocalUser, loginError, password]);

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
      setCurrentUser(app.currentUser);
      onLoginSuccess();
    } catch (error) {
      if (error instanceof MongoDBRealmError) {
        setLoginError(error.error ?? error.message);
      } else {
        setLoginError(Errors.UnknownError);
      }
    }
  };

  const handleLogOut = async () => {
    await app.currentUser?.logOut();
    setCurrentUser(app.currentUser);
  };

  return (
    <Box sx={boxStyle}>
      <Alert
        severity={isAnonUser || isLocalUser ? 'info' : 'warning'}
        sx={alertStyle}
        variant="filled"
      >
        {isAnonUser || isLocalUser
          ? `${Login.DatabaseConnection}\n
          ${isLocalUser ? currentUser?.id : Login.Anonymous}`
          : Login.DatabaseNoConnection}
      </Alert>

      {!isLocalUser ? (
        <>
          <TextField
            fullWidth
            color="success"
            label={Login.Login}
            onChange={(event) => handleEmailChange(event)}
            sx={inputStyle}
            type="email"
            value={email}
            variant="outlined"
          />

          <TextField
            fullWidth
            color="success"
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
        </>
      ) : null}

      <Button
        color="success"
        disabled={!isSubmitEnabled}
        onClick={isLocalUser ? handleLogOut : handleLogIn}
        sx={submitStyle}
        variant="contained"
      >
        {isLocalUser ? Login.SignOut : Login.SignIn}
      </Button>
    </Box>
  );
};
