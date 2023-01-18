import { BASE_URL, winners } from 'api/endPoints'
import { IWinner } from 'interfaces/IWinner'

export const getWinnerById = async (carId: number) => {
  const response = await fetch(`${BASE_URL}${winners}/${carId}`)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = (await response.json()) as IWinner

  return data
}
