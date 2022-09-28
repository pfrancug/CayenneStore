import { gql } from '@apollo/client';

import { Cultivar } from 'schemas';

export interface CultivarQueryProps {
	cultivars: Array<Cultivar>;
}

export const cultivarsQuery = gql`
	query cultivars {
		cultivars {
			_id
			cultivar
			origin
			scoville_scale {
				from
				to
			}
			spicies
		}
	}
`;
