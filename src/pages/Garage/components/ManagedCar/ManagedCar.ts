import { createElementWithClassNameAndAppendNode } from 'helpers'

import styles from './styles.module.css'
import { ManagedCarProps } from './types'
import { useSwitchEngineButtons } from './useSwitchEngineButtons'
import { Car } from '../Car'
import { CarTitle } from '../CarTitle'
import { RemoveCar } from '../RemoveCar'
import { StartEngine } from '../StartEngine'
import { StopEngine } from '../StopEngine'
import { UpdateCar } from '../UpdateCar'

export const ManagedCar = ({ color, carId, name }: ManagedCarProps) => {
  const manageCarButtons = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.manageCarButtons,
    children: [UpdateCar({ carId }), RemoveCar({ carId })],
  })

  const startEngine = StartEngine()
  const stopEngine = StopEngine()
  const iconCar = Car({ color })

  const engineButtonsWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.engineButtonsWrapper,
    children: [startEngine, stopEngine],
  })

  const roadWrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.road,
    children: iconCar,
  })

  useSwitchEngineButtons({
    carId,
    carSVG: iconCar,
    startEngineButton: startEngine,
    stopEngineButton: stopEngine,
    road: roadWrapper,
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.carWrapper,
    children: [CarTitle({ color, name }), manageCarButtons, engineButtonsWrapper, roadWrapper],
  })

  return wrapper
}
