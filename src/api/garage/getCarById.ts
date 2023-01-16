import { BASE_URL, garage } from 'api/endPoints'

import { ICar } from './types'

export const getCarById = (carId: number) =>
  fetch(`${BASE_URL}${garage}/${carId}`).then((response): Promise<ICar> => response.json())
