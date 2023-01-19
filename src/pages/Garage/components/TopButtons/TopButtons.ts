/* eslint-disable no-param-reassign */
import { createElementWithClassNameAndAppendNode, sessionStorageInstanse } from 'helpers'

import styles from './styles.module.css'
import { TopButtonsProps } from './types'
import { CreateCar } from '../CreateCar'
import { GenerateCars } from '../GenerateCars'
import { Race, RACE_BUTTON_DATA_ATTRIBUTE } from '../Race'
import { ResetRace } from '../ResetRace'

export const TopButtons = ({ startEngineButtons, stopEngineButtons, renderGarageContent }: TopButtonsProps) => {
  const handleRaceButtonClick = () => {
    sessionStorageInstanse.removeCurrentWinner()
    raceButton.disabled = true
    raceButton.setAttribute(RACE_BUTTON_DATA_ATTRIBUTE.DATA_RACE_IS_START, 'true')

    startEngineButtons.forEach((startEngineButton) => {
      startEngineButton.click()
    })

    resetRaceButton.disabled = false
  }

  const handleResetraceButtonClick = () => {
    raceButton.removeAttribute(RACE_BUTTON_DATA_ATTRIBUTE.DATA_RACE_IS_START)
    sessionStorageInstanse.removeCurrentWinner()
    resetRaceButton.disabled = true

    stopEngineButtons.forEach((stopEngineButton) => {
      stopEngineButton.disabled = false

      stopEngineButton.click()
    })

    raceButton.disabled = false
  }

  const raceButton = Race({ onclick: handleRaceButtonClick })
  const resetRaceButton = ResetRace({ onclick: handleResetraceButtonClick })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [CreateCar({ renderGarageContent }), raceButton, resetRaceButton, GenerateCars({ renderGarageContent })],
  })

  return { wrapper, raceButton }
}
