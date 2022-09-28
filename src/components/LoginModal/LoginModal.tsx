import FingerprintIcon from '@mui/icons-material/Fingerprint';
import {
  Alert,
  Backdrop,
  Box,
  Fade,
  IconButton,
  Modal,
  TextField,
  useTheme,
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
  const { palette, spacing } = useTheme();
  const { app, setCurrentUser } = useRealmContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [loginError, setLoginError] = useState<null | string>(null);

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

  const loginBoxStyle = {
    bgcolor: 'background.paper',
    border: `2px solid ${palette.grey[900]}`,
    borderRadius: 2,
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    left: '50%',
    padding: 2,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,

    '&:focus-visible': {
      outline: 'none',
    },
  };

  const inputStyle = {
    margin: `${spacing(1)} 0`,

    '& input': {
      textAlign: 'center',
    },

    '& input:-webkit-autofill': {
      transition: 'all 600000s 0s',
    },

    '& input:-internal-autofill-selected': {
      transition: 'all 600000s 0s',
    },
  };

  const submitButtonStyle = {
    alignSelf: 'center',
    color: palette.success.main,
    margin: `${spacing(1)} 0`,
    transitionDuration: 500,
    transitionProperty: 'color',
    width: 'fit-content',
  };

  const loginAlert = {
    justifyContent: 'center',
    margin: `${spacing(1)} 0`,
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
        <Box sx={loginBoxStyle}>
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
            sx={submitButtonStyle}
          >
            <FingerprintIcon fontSize="large" />
          </IconButton>

          {loginError ? (
            <Alert severity="error" sx={loginAlert} variant="outlined">
              {loginError}
            </Alert>
          ) : null}
        </Box>
      </Fade>
    </Modal>
  );
};
