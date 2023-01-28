import { IconCar } from 'components/Icon'

import { carHeight, carWidth } from './constants'

import styles from './styles.module.css'
import { CarProps } from './types'

export const Car = ({ color }: CarProps) =>
  IconCar({ fill: color, width: carWidth, height: carHeight, classname: styles.icon })
