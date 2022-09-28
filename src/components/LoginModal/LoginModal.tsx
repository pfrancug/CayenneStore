import FingerprintIcon from '@mui/icons-material/Fingerprint';
import {
  Alert,
  Backdrop,
  Box,
  Fade,
  IconButton,
  Modal,
  TextField,
} from '@mui/material';
import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Credentials, MongoDBRealmError } from 'realm-web';

import { alertStyle, boxStyle, inputStyle, submitStyle } from './styles';
import { useRealmContext } from 'contexts';
import { Errors, Login } from 'utils/constants';

interface LoginModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const LoginModal: FC<LoginModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const { app, setCurrentUser } = useRealmContext();

  const [email, setEmail] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [loginError, setLoginError] = useState<null | string>(null);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const condition = email.length > 0 && password.length > 0 && !loginError;
    setIsSubmitEnabled(condition);
  }, [email, loginError, password]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmail(event.target.value);
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
    <Modal
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
      closeAfterTransition
      onClose={handleCloseModal}
      open={isModalOpen}
    >
      <Fade in={isModalOpen}>
        <Box sx={boxStyle}>
          <TextField
            color="success"
            fullWidth
            onChange={(event) => handleEmailChange(event)}
            placeholder={Login.Email}
            sx={inputStyle}
            type="email"
            value={email}
            variant="outlined"
          />

          <TextField
            color="success"
            fullWidth
            onChange={(event) => handlePasswordChange(event)}
            placeholder={Login.Password}
            sx={inputStyle}
            type="password"
            value={password}
            variant="outlined"
          />

          <IconButton
            disabled={!isSubmitEnabled}
            onClick={handleLogIn}
            sx={submitStyle}
          >
            <FingerprintIcon fontSize="large" />
          </IconButton>

          {loginError ? (
            <Alert severity="error" sx={alertStyle} variant="outlined">
              {loginError}
            </Alert>
          ) : null}
        </Box>
      </Fade>
    </Modal>
  );
};
