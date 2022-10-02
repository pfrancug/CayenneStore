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
      scoville_scale {
        from
        to
      }
      spicies
      user
    }
  }
`;

export const useGetCultivars = () => useQuery<CultivarArrayProps>(getCultivars);

export const addCultivar = gql`
  mutation AddCultivar($data: CultivarInsertInput!) {
    insertOneCultivar(data: $data) {
      creation_date
      cultivar
      last_update_date
      origin
      scoville_scale {
        from
        to
      }
      spicies
      user
    }
  }
`;

export const useAddCultivar = () =>
  useMutation<CultivarInsertInput>(addCultivar);
