import { BASE_URL, winners } from 'api/endPoints'
import { SYMBOL } from 'enums'
import { IWinner } from 'interfaces/IWinner'

import { QueryParams } from './types'

export const getWinners = async ({ _limit, _order, _page, _sort }: QueryParams) => {
  let requestUrl = `${BASE_URL}${winners}`

  const queryParamsEntries = Object.entries({
    _limit,
    _page,
    _order,
    _sort,
  }).filter(([, value]) => !!value)

  if (queryParamsEntries.length) {
    requestUrl += SYMBOL.QUESTION

    queryParamsEntries.forEach(([key, value]) => {
      const param = `${key}${SYMBOL.EQUAL}${value!}`

      requestUrl += param
    })
  }

  const response = await fetch(requestUrl)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = (await response.json()) as IWinner[]

  return data
}
