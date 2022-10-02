import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { App, User } from 'realm-web';

interface realmContextState {
  app: App;
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

const RealmContext = createContext<realmContextState | null>(null);

interface realmContextProviderProps {
  app: App;
  children: ReactNode;
}
export const RealmContextProvider: FC<realmContextProviderProps> = ({
  app,
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(app.currentUser);

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
