import { IconCar } from 'components/Icon'

import styles from './styles.module.css'
import { CarProps } from './types'

export const Car = ({ color }: CarProps) => IconCar({ fill: color, width: 50, height: 50, classname: styles.icon })
