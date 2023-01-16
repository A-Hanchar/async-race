import { createElementWithClassName } from 'helpers'

import styles from './styles.module.css'
import { ManagedCarProps } from './types'
import { Car } from '../Car'
import { CarTitle } from '../CarTitle'
import { RemoveCar } from '../RemoveCar'
import { StartEngine } from '../StartEngine'
import { StopEngine } from '../StopEngine'
import { UpdateCar } from '../UpdateCar'

export const ManagedCar = ({ color, carId, name }: ManagedCarProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.carWrapper })
  const manageCarButtons = createElementWithClassName({ tagName: 'div', classname: styles.manageCarButtons })
  const engineButtonsWrapper = createElementWithClassName({ tagName: 'div', classname: styles.engineButtonsWrapper })

  manageCarButtons.append(UpdateCar({ carId }), RemoveCar({ carId }))

  engineButtonsWrapper.append(StartEngine({ carId }), StopEngine({ carId }))

  const roadWrapper = createElementWithClassName({ tagName: 'div', classname: styles.road })

  roadWrapper.append(Car({ color }))

  wrapper.append(CarTitle({ color, name }), manageCarButtons, engineButtonsWrapper, roadWrapper)

  return wrapper
}
