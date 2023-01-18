import { BASE_URL, winners } from 'api/endPoints'
import { IWinner } from 'interfaces/IWinner'

import { CreateWinnerRequestData } from './types'

export const createWinner = async ({ id, time }: CreateWinnerRequestData) => {
  const body = {
    id,
    time,
    wins: 1,
  }

  const response = await fetch(`${BASE_URL}${winners}`, {
    method: 'POST',
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

  // return fetch(`${BASE_URL}${winners}`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json;charset=utf-8',
  //   },
  //   body: JSON.stringify(body),
  // }).then((response): Promise<IWinner> => response.json())
}
