import { Button } from '@mui/material';
import { useState, VFC } from 'react';

import { LoginModal } from 'components';
import { useRealmContext } from 'contexts';
import { Login } from 'utils/constants';

export const LoginButton: VFC = () => {
	const { app, currentUser, setCurrentUser } = useRealmContext();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleLogOut = async () => {
		await app.currentUser?.logOut();
		setCurrentUser(app.currentUser);
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	if (currentUser) {
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
			<LoginModal
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
			/>
		</>
	);
};
