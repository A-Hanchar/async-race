import { IWinner } from './IWinner'

export interface IGetWinnersResponse {
  winners: IWinner[]
  totalElements: number | null
}
