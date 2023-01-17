import { BASE_URL, garage } from 'api/endPoints'
import { SYMBOL } from 'enums'
import { ICar, IGetCarsResponse } from 'interfaces'

import { QueryParams } from './types'

export const getCars = ({ _limit, _page }: QueryParams) => {
  let requestUrl = `${BASE_URL}${garage}`

  const queryParamsEntries = Object.entries({
    _limit,
    _page,
  }).filter(([, value]) => !!value)

  if (queryParamsEntries.length) {
    requestUrl += SYMBOL.QUESTION

    queryParamsEntries.forEach(([key, value]) => {
      const param = `${key}${SYMBOL.EQUAL}${value!}`

      requestUrl += param
    })

    return fetch(requestUrl).then(
      async (response): Promise<IGetCarsResponse> => ({
        cars: (await response.json()) as ICar[],
        totalElements: Number(response.headers.get('X-Total-Count')),
      }),
    )
  }

  return fetch(requestUrl).then(
    async (response): Promise<IGetCarsResponse> => ({
      cars: (await response.json()) as ICar[],
    }),
  )
}
