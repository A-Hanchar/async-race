/* eslint-disable no-param-reassign */
import { createElementWithClassNameAndAppendNode, sessionStorageInstanse } from 'helpers'

import { TopButtonsData } from 'pages/Garage/types'

import styles from './styles.module.css'
import { TopButtonsProps } from './types'
import { CreateCar } from '../CreateCar'
import { GenerateCars } from '../GenerateCars'
import { Race, RACE_BUTTON_DATA_ATTRIBUTE } from '../Race'
import { ResetRace } from '../ResetRace'

export const TopButtons = ({
  renderGarageContent,
  managedCarButtons,
}: TopButtonsProps): { wrapper: HTMLDivElement; topButtons: TopButtonsData } => {
  const handleRaceButtonClick = () => {
    sessionStorageInstanse.removeCurrentWinner()

    raceButton.setAttribute(RACE_BUTTON_DATA_ATTRIBUTE.DATA_RACE_IS_START, 'true')

    raceButton.disabled = true
    generateCarsButton.disabled = true
    createCarButton.disabled = true

    managedCarButtons.forEach(({ removeCarButton, startEngineButton, stopEngineButton, updateCarButton }) => {
      startEngineButton.click()

      removeCarButton.disabled = true
      startEngineButton.disabled = true
      stopEngineButton.disabled = true
      updateCarButton.disabled = true
    })

    resetRaceButton.disabled = false
  }

  const handleResetraceButtonClick = () => {
    sessionStorageInstanse.removeCurrentWinner()
    raceButton.removeAttribute(RACE_BUTTON_DATA_ATTRIBUTE.DATA_RACE_IS_START)

    resetRaceButton.disabled = true

    managedCarButtons.forEach(({ removeCarButton, startEngineButton, stopEngineButton, updateCarButton }) => {
      stopEngineButton.disabled = false

      stopEngineButton.click()

      removeCarButton.disabled = false
      startEngineButton.disabled = false
      stopEngineButton.disabled = true
      updateCarButton.disabled = false
    })

    raceButton.disabled = false
    generateCarsButton.disabled = false
    createCarButton.disabled = false
  }

  const createCarButton = CreateCar({ renderGarageContent })
  const raceButton = Race({ onclick: handleRaceButtonClick })
  const resetRaceButton = ResetRace({ onclick: handleResetraceButtonClick })
  const generateCarsButton = GenerateCars({ renderGarageContent })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [createCarButton, raceButton, resetRaceButton, generateCarsButton],
  })

  return { wrapper, topButtons: { createCarButton, raceButton, resetRaceButton, generateCarsButton } }
}
