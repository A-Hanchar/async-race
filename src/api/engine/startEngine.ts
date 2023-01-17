import { BASE_URL, engine } from 'api/endPoints'
import { IEngine } from 'interfaces'

export const startEngine = (carId: number) =>
  fetch(`${BASE_URL}${engine}?id=${carId}&status=started`, { method: 'PATCH' }).then(
    (response): Promise<IEngine> => response.json(),
  )
