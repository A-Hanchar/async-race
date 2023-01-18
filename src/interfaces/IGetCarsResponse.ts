import { ICar } from './ICar'

export interface IGetCarsResponse {
  cars: ICar[]
  totalElements: number | null
}
