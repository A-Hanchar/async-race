import { BASE_URL, garage } from 'api/endPoints'
import { request } from 'api/request'
import { ICar } from 'interfaces'

export const getCarById = (carId: number) => request<ICar>(`${BASE_URL}${garage}/${carId}`)
