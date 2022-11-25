import { gql, useMutation, useQuery } from '@apollo/client';

import { Seed, SeedInsertInput } from 'schemas';

interface SeedArrayProps {
  seeds: Array<Seed>;
}

export const getSeeds = gql`
  query Seeds {
    seeds {
      _id
      creation_date
      cultivar
      date
      id
      image
      last_update_date
      owner_id
      parent_seed
      source
    }
  }
`;

export const useGetSeeds = () =>
  useQuery<SeedArrayProps>(getSeeds, { notifyOnNetworkStatusChange: true });

export const addSeed = gql`
  mutation AddSeed($data: SeedInsertInput!) {
    insertOneSeed(data: $data) {
      creation_date
      cultivar
      date
      id
      image
      last_update_date
      owner_id
      parent_seed
      source
    }
  }
`;

export const useAddSeed = () => useMutation<SeedInsertInput>(addSeed);
