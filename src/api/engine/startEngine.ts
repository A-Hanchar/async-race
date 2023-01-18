import { BASE_URL, engine } from 'api/endPoints'
import { request } from 'api/request'
import { METHOD } from 'enums'
import { IEngine } from 'interfaces'
import { generateQueryURL } from 'utils'

export const startEngine = (carId: number) => {
  const queryUrl = generateQueryURL({ id: carId, status: 'started' })

  return request<IEngine>(`${BASE_URL}${engine}${queryUrl}`, { method: METHOD.PATCH })
}
