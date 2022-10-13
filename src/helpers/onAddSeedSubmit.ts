import {
  ApolloCache,
  DefaultContext,
  MutationFunctionOptions,
  OperationVariables,
} from '@apollo/client';
import { FieldValues } from 'react-hook-form';
import { User } from 'realm-web';

import { SeedInsertInput } from 'schemas';
import { inputValidation, resizeFile } from 'utils';

export const onAddSeedSubmit = async (
  data: FieldValues,
  insertFunction: (
    options?: MutationFunctionOptions<
      SeedInsertInput,
      OperationVariables,
      DefaultContext,
      ApolloCache<unknown>
    >,
  ) => Promise<unknown>,
  user: User | null,
) => {
  const date = new Date();
  const file = data.image[0];
  let image;

  if (file) {
    try {
      image = await resizeFile(file);
    } catch (error) {
      console.error(error);
    }
  }

  insertFunction({
    variables: {
      data: {
        creation_date: date,
        cultivar: inputValidation(data.cultivar),
        id: inputValidation(data.id),
        image: image ?? null,
        last_update_date: date,
        owner_id: user?.id ?? null,
        parent: inputValidation(data.parent),
        source: inputValidation(data.source),
      } as SeedInsertInput,
    },
  });
};
