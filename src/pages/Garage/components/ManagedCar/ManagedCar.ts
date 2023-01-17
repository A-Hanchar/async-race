import { createElementWithClassNameAndAppendNode } from 'helpers'

import styles from './styles.module.css'
import { ManagedCarProps } from './types'
import { Car } from '../Car'
import { CarTitle } from '../CarTitle'
import { RemoveCar } from '../RemoveCar'
import { StartEngine } from '../StartEngine'
import { StopEngine } from '../StopEngine'
import { UpdateCar } from '../UpdateCar'

export const ManagedCar = async ({ color, carId, name }: ManagedCarProps) => {
  const updateCarButton = await UpdateCar({ carId })

  const manageCarButtons = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.manageCarButtons,
    children: [updateCarButton, RemoveCar({ carId })],
  })

  const engineButtonsWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.engineButtonsWrapper,
    children: [StartEngine({ carId }), StopEngine({ carId })],
  })

  const roadWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.road,
    children: Car({ color }),
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.carWrapper,
    children: [CarTitle({ color, name }), manageCarButtons, engineButtonsWrapper, roadWrapper],
  })

  return wrapper
}
