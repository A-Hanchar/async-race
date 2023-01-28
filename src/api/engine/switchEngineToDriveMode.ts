import { BASE_URL, engine } from 'api/endPoints'
import { request } from 'api/request'
import { METHOD } from 'enums'
import { IEngineWorkStatus } from 'interfaces'
import { generateQueryURL } from 'utils'

export const switchToDriveMode = (carId: number, controller?: AbortController) => {
  const queryUrl = generateQueryURL({ id: carId, status: 'drive' })

  return request<IEngineWorkStatus>(`${BASE_URL}${engine}${queryUrl}`, {
    method: METHOD.PATCH,
    signal: controller?.signal,
  })
}
