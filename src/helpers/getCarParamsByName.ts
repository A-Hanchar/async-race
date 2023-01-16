import { CARS_MANUFACTORY, SYMBOL } from 'enums'

export const getCarParamsByName = (carName: string) => {
  const [carManufactory, carModel] = carName.split(SYMBOL.COLON)

  return {
    carManufactory: carManufactory?.trim() as CARS_MANUFACTORY | undefined,
    carModel: carModel?.trim(),
  }
}
