import { BASE_URL, winners } from 'api/endPoints'
import { request } from 'api/request'
import { IWinner } from 'interfaces'

export const getWinnerById = (carId: number) => request<IWinner>(`${BASE_URL}${winners}/${carId}`)
