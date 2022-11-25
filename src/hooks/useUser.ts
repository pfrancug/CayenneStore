import { useRealmContext } from 'contexts';
import { ProviderTypes } from 'ts/enums';

export const useUser = () => {
  const { currentUser } = useRealmContext();
  const isAnonUser = currentUser?.providerType === ProviderTypes.AnonUser;
  const isLocalUser = currentUser?.providerType === ProviderTypes.LocalUserpass;

  return { isAnonUser, isLocalUser };
};
