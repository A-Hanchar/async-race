import { BASE_URL, winners } from 'api/endPoints'
import { SORT_TYPE } from 'enums'
import { IGetWinnersResponse, IWinner } from 'interfaces'
import { generateQueryURL } from 'utils'

import { QueryParams } from './types'

export const getWinners = async ({ _limit, _order = SORT_TYPE.ASC, _page, _sort }: QueryParams) => {
  const queryUrl = generateQueryURL({ _limit, _page, _order, _sort })

  const response = await fetch(`${BASE_URL}${winners}${queryUrl}`)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const winnersList = (await response.json()) as IWinner[]
  const totalItemCars = response.headers.get('X-Total-Count')

  const data: IGetWinnersResponse = {
    winners: winnersList,
    totalElements: totalItemCars ? Number(totalItemCars) : null,
  }

  return data
}
