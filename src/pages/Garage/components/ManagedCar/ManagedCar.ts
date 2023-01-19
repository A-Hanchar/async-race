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

export const ManagedCar = ({
  color,
  carId,
  name,
  renderGarageContent,
  managedCarButtons,
  topControlButtons,
}: ManagedCarProps) => {
  const iconCar = Car({ color })
  const updateCarButton = UpdateCar({ carId, renderGarageContent })
  const removeCarButton = RemoveCar({ carId, renderGarageContent })
  const startEngine = StartEngine()
  const stopEngine = StopEngine()

  managedCarButtons.push({
    removeCarButton,
    startEngineButton: startEngine,
    stopEngineButton: stopEngine,
    updateCarButton,
    carId,
  })

  const manageCarButtons = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.manageCarButtons,
    children: [updateCarButton, removeCarButton],
  })

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
    carInfo: {
      color,
      id: carId,
      name,
    },
    carSVG: iconCar,
    road: roadWrapper,
    managedCarButtons,
    topManagedButton: topControlButtons,
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.carWrapper,
    children: [CarTitle({ color, name }), manageCarButtons, engineButtonsWrapper, roadWrapper],
  })

  return wrapper
}
