import { BASE_URL, garage } from 'api/endPoints'
import { request } from 'api/request'
import { ICar } from 'interfaces'
import { generateQueryURL } from 'utils'

import { QueryParams } from './types'

export const getCars = ({ _limit, _page }: QueryParams) => {
  const queryUrl = generateQueryURL({ _limit, _page })

  return request<ICar[]>(`${BASE_URL}${garage}${queryUrl}`)
}
