import { BASE_URL, garage } from 'api/endPoints'
import { generateQueryURL } from 'utils'
import { one } from 'variables'

export const getCarsCount = async () => {
  const queryUrl = generateQueryURL({ _limit: one })

  const response = await fetch(`${BASE_URL}${garage}${queryUrl}`)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const totalItemCars = response.headers.get('X-Total-Count')!

  return Number(totalItemCars)
}
