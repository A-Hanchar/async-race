import { BASE_URL, winners } from 'api/endPoints'
import { request } from 'api/request'
import { METHOD } from 'enums'
import { IWinner } from 'interfaces'

import { UpdateWinnerRequestData } from './types'

export const updateWinnerById = ({ carId, time, wins }: UpdateWinnerRequestData) => {
  const body = {
    time,
    wins,
  }

  return request<IWinner>(`${BASE_URL}${winners}/${carId}`, {
    method: METHOD.PUT,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  })
}
