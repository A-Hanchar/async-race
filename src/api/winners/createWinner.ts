import { BASE_URL, winners } from 'api/endPoints'
import { request } from 'api/request'
import { METHOD } from 'enums'
import { IWinner } from 'interfaces'
import { one } from 'variables'

import { CreateWinnerRequestData } from './types'

export const createWinner = ({ id, time }: CreateWinnerRequestData) => {
  const body = {
    id,
    time,
    wins: one,
  }

  return request<IWinner>(`${BASE_URL}${winners}`, {
    method: METHOD.POST,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  })
}
