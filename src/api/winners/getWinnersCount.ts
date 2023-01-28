import { BASE_URL, winners } from 'api/endPoints'
import { generateQueryURL } from 'utils'
import { one } from 'variables'

export const getWinnersCount = async () => {
  const queryUrl = generateQueryURL({ _limit: one })

  const response = await fetch(`${BASE_URL}${winners}${queryUrl}`)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const totalItemCars = response.headers.get('X-Total-Count')!

  return Number(totalItemCars)
}
