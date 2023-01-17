import { IconCar } from 'components/Icon'
import { converterPxToRem } from 'utils'
import { zero } from 'variables'

import { carHeight, carWidth } from './constants'

import styles from './styles.module.css'
import { CarProps } from './types'

export const Car = ({ color }: CarProps) => {
  const car = IconCar({ fill: color, width: carWidth, height: carHeight, classname: styles.icon })

  car.style.left = converterPxToRem(zero)

  return car
}
