export type CreateCarRequestData = {
  model: string
  manufactory: string
  color: string
}

export type UpdateCarRequestData = {
  model: string
  manufactory: string
  color: string
  carId: number
}

export type QueryParams = {
  _limit?: number
  _page?: number
}
