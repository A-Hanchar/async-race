import { BASE_URL, garage } from 'api/endPoints'
import { request } from 'api/request'
import { METHOD } from 'enums'
import { ICar } from 'interfaces'

import { CreateCarRequestData } from './types'

export const createCar = ({ manufactory, model, color }: CreateCarRequestData) => {
  const body = {
    name: `${manufactory}: ${model}`,
    color,
  }

  return request<ICar>(`${BASE_URL}${garage}`, {
    method: METHOD.POST,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  })
}
