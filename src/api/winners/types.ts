import { SORT_TYPE } from 'enums'
import { IWinner } from 'interfaces/IWinner'

export type CreateWinnerRequestData = {
  id: number
  time: number
}

export type UpdateWinnerRequestData = {
  carId: number
  wins: number
  time: number
}

export type QueryParams = {
  _limit?: number
  _page?: number
  _sort?: keyof IWinner
  _order?: SORT_TYPE
}
