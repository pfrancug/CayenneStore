import { gql, useMutation, useQuery } from '@apollo/client';

import { Cultivar, CultivarInsertInput } from 'schemas';

interface CultivarArrayProps {
  cultivars: Array<Cultivar>;
}

export const getCultivars = gql`
  query Cultivars {
    cultivars {
      _id
      creation_date
      cultivar
      last_update_date
      origin
      owner_id
      scoville_scale {
        from
        to
      }
      species
    }
  }
`;

export const useGetCultivars = () =>
  useQuery<CultivarArrayProps>(getCultivars, {
    notifyOnNetworkStatusChange: true,
  });

export const addCultivar = gql`
  mutation AddCultivar($data: CultivarInsertInput!) {
    insertOneCultivar(data: $data) {
      creation_date
      cultivar
      last_update_date
      origin
      owner_id
      scoville_scale {
        from
        to
      }
      species
    }
  }
`;

export const useAddCultivar = () =>
  useMutation<CultivarInsertInput>(addCultivar);
