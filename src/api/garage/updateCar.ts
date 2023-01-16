import { BASE_URL, garage } from 'api/endPoints'

import { ICar } from './types'

export const updateCar = async ({
  color,
  manufactory,
  model,
  carId,
}: {
  model: string
  manufactory: string
  color: string
  carId: number
}) => {
  const body = {
    name: `${manufactory}: ${model}`,
    color,
  }

  return await fetch(`${BASE_URL}${garage}/${carId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  }).then((response): Promise<ICar> => response.json())
}
