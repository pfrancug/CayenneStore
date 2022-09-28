import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

interface LoadingContextState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextState | null>(null);

interface LoadingContextProviderProps {
  children: ReactNode;
}

export const LoadingContextProvider: FC<LoadingContextProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const value: LoadingContextState = useMemo(
    () => ({ isLoading, setIsLoading }),
    [isLoading],
  );

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoadingContext was used outside of its Provider');
  }

  return context;
};
