import { BASE_URL, garage } from 'api/endPoints'

import { ICar } from './types'

export const getCars = () => fetch(`${BASE_URL}${garage}`).then((response): Promise<ICar[]> => response.json())
