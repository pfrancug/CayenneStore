import { Badge, Button } from '@mui/material';
import { FC, useState } from 'react';

import { LoginDialog } from 'components';
import { useRealmContext } from 'contexts';
import { Login, ProviderTypes } from 'utils/constants';

export const LoginButton: FC = () => {
  const { app, currentUser, setCurrentUser } = useRealmContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogOut = async () => {
    await app.currentUser?.logOut();
    setCurrentUser(app.currentUser);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const LoginButton: FC<{ login?: boolean }> = ({ login }) => (
    <>
      <Button
        color="primary"
        onClick={login ? handleOpenModal : handleLogOut}
        size="small"
        variant="contained"
      >
        {login ? Login.SignIn : Login.SignOut}
      </Button>
      {login ? (
        <LoginDialog
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
    </>
  );

  if (currentUser?.providerType === ProviderTypes.LocalUserpass) {
    return <LoginButton />;
  }

  if (currentUser?.providerType === ProviderTypes.AnonUser) {
    return (
      <Badge color="success" variant="dot">
        <LoginButton login />
      </Badge>
    );
  }

  return <LoginButton login />;
};
