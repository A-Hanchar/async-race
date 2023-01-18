import { BASE_URL, garage } from 'api/endPoints'
import { request } from 'api/request'
import { METHOD } from 'enums'
import { ICar } from 'interfaces'

import { UpdateCarRequestData } from './types'

export const updateCar = ({ color, manufactory, model, carId }: UpdateCarRequestData) => {
  const body = {
    name: `${manufactory}: ${model}`,
    color,
  }

  return request<ICar>(`${BASE_URL}${garage}/${carId}`, {
    method: METHOD.PUT,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  })
}
