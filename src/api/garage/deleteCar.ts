import { BASE_URL, garage } from 'api/endPoints'
import { request } from 'api/request'
import { deleteWinner } from 'api/winners'
import { METHOD } from 'enums'
import { EmptyObject } from 'types'

export const deleteCar = async (carId: number) => {
  try {
    await deleteWinner(carId)
  } catch (error) {}

  const data = await request<EmptyObject>(`${BASE_URL}${garage}/${carId}`, {
    method: METHOD.DELETE,
  })

  return data
}
