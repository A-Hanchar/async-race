import { BASE_URL, winners } from 'api/endPoints'
import { request } from 'api/request'
import { METHOD } from 'enums'
import { EmptyObject } from 'types'

export const deleteWinner = (carId: number) =>
  request<EmptyObject>(`${BASE_URL}${winners}/${carId}`, {
    method: METHOD.DELETE,
  })
