import { BASE_URL, winners } from 'api/endPoints'
import { request } from 'api/request'
import { SORT_TYPE } from 'enums'
import { IWinner } from 'interfaces'
import { generateQueryURL } from 'utils'

import { QueryParams } from './types'

export const getWinners = ({ _limit, _order = SORT_TYPE.ASC, _page, _sort }: QueryParams) => {
  const queryUrl = generateQueryURL({ _limit, _page, _order, _sort })

  return request<IWinner[]>(`${BASE_URL}${winners}${queryUrl}`)
}
