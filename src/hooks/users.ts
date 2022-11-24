import { useRealmContext } from 'contexts';
import { ProviderTypes } from 'ts/enums';

export const useIsAnonUser = () => {
  const { currentUser } = useRealmContext();
  const isAnonUser = currentUser?.providerType === ProviderTypes.AnonUser;

  return isAnonUser;
};

export const useIsLocalUser = () => {
  const { currentUser } = useRealmContext();
  const isLocalUser = currentUser?.providerType === ProviderTypes.LocalUserpass;

  return isLocalUser;
};
