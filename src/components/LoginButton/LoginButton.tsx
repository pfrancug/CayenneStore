import { Button } from '@mui/material';
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

  if (currentUser?.providerType === ProviderTypes.LocalUserPass) {
    return (
      <Button
        color="inherit"
        onClick={handleLogOut}
        size="small"
        variant="text"
      >
        {Login.SignOut}
      </Button>
    );
  }

  return (
    <>
      <Button
        color="inherit"
        onClick={handleOpenModal}
        size="small"
        variant="text"
      >
        {Login.SignIn}
      </Button>
      <LoginDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
