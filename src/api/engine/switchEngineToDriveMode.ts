import { BASE_URL, engine } from 'api/endPoints'
import { IEngineWorkStatus } from 'interfaces'

export const switchToDriveMode = (carId: number, controller?: AbortController) =>
  fetch(`${BASE_URL}${engine}?id=${carId}&status=drive`, { method: 'PATCH', signal: controller?.signal }).then(
    (response): Promise<IEngineWorkStatus> => response.json(),
  )
