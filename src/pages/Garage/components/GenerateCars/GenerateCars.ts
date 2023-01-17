import { createCar, CreateCarRequestData } from 'api/garage'
import { Button } from 'components/Button'
import { CARS_MANUFACTORY } from 'enums'
import { getRandomColorHex, getRandomInt } from 'utils'
import { manufactoriesOptions, modelOptionsByManufactories, one, zero } from 'variables'

import styles from './styles.module.css'

export const GenerateCars = () => {
  const handleGenerateCars = async () => {
    button.disabled = true

    const countGenerateCar = 100

    const carsData: CreateCarRequestData[] = []

    for (let i = zero; i < countGenerateCar; i += one) {
      const color = getRandomColorHex()
      const manufactory = manufactoriesOptions[getRandomInt(manufactoriesOptions.length)]?.value ?? CARS_MANUFACTORY.BMW

      const carModels = modelOptionsByManufactories[manufactory]

      const model = carModels[getRandomInt(carModels.length)]?.value ?? modelOptionsByManufactories.BMW[zero]!.value

      carsData.push({
        color,
        manufactory,
        model,
      })
    }

    await Promise.allSettled(carsData.map(createCar))

    button.disabled = false
  }

  const button = Button({ children: 'Generate Cars', classname: styles.button, onclick: handleGenerateCars })

  return button
}
