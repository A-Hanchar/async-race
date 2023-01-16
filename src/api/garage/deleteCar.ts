import { BASE_URL, garage } from 'api/endPoints'
import { EmptyObject } from 'types'

export const deleteCar = (carId: number) =>
  fetch(`${BASE_URL}${garage}/${carId}`, {
    method: 'DELETE',
  }).then((response): Promise<EmptyObject> => response.json())
