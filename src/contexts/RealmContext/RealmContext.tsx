import { createContext, FC, useContext, useMemo, useState } from 'react';
import { App, User } from 'realm-web';

interface realmContextProviderProps {
	app: App;
}

interface realmContextState extends realmContextProviderProps {
	currentUser: User | null;
	setCurrentUser: (user: User | null) => void;
}

const RealmContext = createContext<realmContextState | null>(null);

export const RealmContextProvider: FC<realmContextProviderProps> = ({
	app,
	children,
}) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	const value: realmContextState = useMemo(
		() => ({ app, currentUser, setCurrentUser }),
		[app, currentUser],
	);

	return (
		<RealmContext.Provider value={value}>{children}</RealmContext.Provider>
	);
};

export const useRealmContext = () => {
	const context = useContext(RealmContext);

	if (!context) {
		throw new Error('useRealmContext was used outside of its Provider');
	}

	return context;
};
