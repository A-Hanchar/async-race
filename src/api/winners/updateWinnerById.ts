import { BASE_URL, winners } from 'api/endPoints'
import { IWinner } from 'interfaces/IWinner'

import { UpdateWinnerRequestData } from './types'

export const updateWinnerById = async ({ carId, time, wins }: UpdateWinnerRequestData) => {
  const body = {
    time,
    wins,
  }

  const response = await fetch(`${BASE_URL}${winners}/${carId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = (await response.json()) as IWinner

  return data

  // return fetch(`${BASE_URL}${winners}/${carId}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json;charset=utf-8',
  //   },
  //   body: JSON.stringify(body),
  // }).then((response): Promise<IWinner> => response.json())
}
