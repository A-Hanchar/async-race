import { BASE_URL, garage } from 'api/endPoints'

import { ICar } from './types'

export const createCar = async ({
  manufactory,
  model,
  color,
}: {
  model: string
  manufactory: string
  color: string
}) => {
  const body = {
    name: `${manufactory}: ${model}`,
    color,
  }

  return await fetch(`${BASE_URL}${garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  }).then((response): Promise<ICar> => response.json())
}
