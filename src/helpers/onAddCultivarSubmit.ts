import {
  ApolloCache,
  DefaultContext,
  MutationFunctionOptions,
  OperationVariables,
} from '@apollo/client';
import dayjs from 'dayjs';
import { FieldValues } from 'react-hook-form';
import { User } from 'realm-web';

import { CultivarInsertInput } from 'schemas';
import { inputValidation } from 'utils';

export const onAddCultivarSubmit = (
  data: FieldValues,
  insertFunction: (
    options?: MutationFunctionOptions<
      CultivarInsertInput,
      OperationVariables,
      DefaultContext,
      ApolloCache<unknown>
    >,
  ) => Promise<unknown>,
  user: User | null,
) => {
  const newDate = dayjs();

  insertFunction({
    variables: {
      data: {
        creation_date: newDate,
        cultivar: inputValidation(data.cultivar),
        last_update_date: newDate,
        origin: inputValidation(data.origin),
        owner_id: user?.id ?? null,
        scoville_scale: {
          from: inputValidation(data.heatFrom),
          to: inputValidation(data.heatTo),
        },
        species: inputValidation(data.species),
      } as CultivarInsertInput,
    },
  });
};
