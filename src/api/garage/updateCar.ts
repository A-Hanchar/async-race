import { BASE_URL, garage } from 'api/endPoints'
import { ICar } from 'interfaces'

import { UpdateCarRequestData } from './types'

export const updateCar = ({ color, manufactory, model, carId }: UpdateCarRequestData) => {
  const body = {
    name: `${manufactory}: ${model}`,
    color,
  }

  return fetch(`${BASE_URL}${garage}/${carId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  }).then((response): Promise<ICar> => response.json())
}
