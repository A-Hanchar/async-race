import { BASE_URL, garage } from 'api/endPoints'
import { ICar, IGetCarsResponse } from 'interfaces'
import { generateQueryURL } from 'utils'

import { QueryParams } from './types'

export const getCars = async ({ _limit, _page }: QueryParams) => {
  const queryUrl = generateQueryURL({ _limit, _page })

  const response = await fetch(`${BASE_URL}${garage}${queryUrl}`)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const cars = (await response.json()) as ICar[]
  const totalItemCars = response.headers.get('X-Total-Count')

  const data: IGetCarsResponse = {
    cars,
    totalElements: totalItemCars ? Number(totalItemCars) : null,
  }

  return data
}
