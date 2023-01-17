export interface ICar {
  name: string
  color: string
  id: number
}

export type CreateCarRequestData = {
  model: string
  manufactory: string
  color: string
}
