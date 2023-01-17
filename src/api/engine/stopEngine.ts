import { BASE_URL, engine } from 'api/endPoints'
import { IEngine } from 'interfaces'

export const stopEngine = (carId: number) =>
  fetch(`${BASE_URL}${engine}?id=${carId}&status=stopped`, { method: 'PATCH' }).then(
    (response): Promise<IEngine> => response.json(),
  )
