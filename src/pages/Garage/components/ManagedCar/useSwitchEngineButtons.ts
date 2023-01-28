/* eslint-disable no-param-reassign */
import { startEngine, stopEngine, switchToDriveMode } from 'api/engine'
import { sessionStorageInstanse } from 'helpers'
import { ICar } from 'interfaces'
import { ManagedCarButtons, TopButtonsData } from 'pages/Garage/types'
import { converterPxToRem } from 'utils'
import { zero } from 'variables'

import { carWidth } from '../Car'
import { RACE_BUTTON_DATA_ATTRIBUTE } from '../Race'
import { setWinner, WinnerInfo } from '../WinnerInfo'

export const useSwitchEngineButtons = ({
  carSVG,
  carInfo,
  road,
  managedCarButtons,
  topManagedButton: { raceButton },
}: {
  carSVG: SVGSVGElement
  road: HTMLDivElement
  carInfo: ICar
  managedCarButtons: ManagedCarButtons[]
  topManagedButton: TopButtonsData
}) => {
  let animationId = zero

  const { startEngineButton, stopEngineButton } = managedCarButtons.find(({ carId }) => carId === carInfo.id)!

  const carAnimation = ({ distance, velocity }: { distance: number; velocity: number }) => {
    const startAnimation = performance.now()
    const duration = distance / velocity
    const maxRoadDistanse = 100 // %

    const animation = (time: number) => {
      const roadWidth = road.offsetWidth
      const roadWorkedWidth = roadWidth - carWidth

      const maxDistanse = (roadWorkedWidth / roadWidth) * maxRoadDistanse

      const progress = (time - startAnimation) / duration
      const newPosition = progress * maxDistanse

      carSVG.style.left = `${newPosition}%`

      if (newPosition < maxDistanse) {
        animationId = requestAnimationFrame(animation)

        return
      }

      if (!roadWidth) {
        cancelAnimationFrame(animationId)
        switchEngineController.abort()

        return
      }

      carSVG.style.left = `calc(100% - ${converterPxToRem(carWidth)})`

      if (
        !sessionStorageInstanse.hasCurrentWinner() &&
        raceButton.hasAttribute(RACE_BUTTON_DATA_ATTRIBUTE.DATA_RACE_IS_START)
      ) {
        const finishTime = performance.now()
        const resultTime = finishTime - startAnimation

        sessionStorageInstanse.setCurrentWinner({ car: carInfo, time: Math.floor(resultTime) })

        const { showModalWinners } = WinnerInfo()

        showModalWinners()
        setWinner()
      }
    }

    animationId = requestAnimationFrame(animation)
  }

  let switchEngineController: AbortController

  const checkEngine = async () => {
    try {
      switchEngineController = new AbortController()
      await switchToDriveMode(carInfo.id, switchEngineController)
    } catch (error) {
      cancelAnimationFrame(animationId)
    }
  }

  const handleStartEngineClick = async () => {
    startEngineButton.disabled = true
    raceButton.disabled = true

    const { distance, velocity } = await startEngine(carInfo.id)

    stopEngineButton.disabled = raceButton.hasAttribute(RACE_BUTTON_DATA_ATTRIBUTE.DATA_RACE_IS_START)

    carAnimation({ distance, velocity })
    checkEngine()
  }

  const handleStopEngineClick = async () => {
    stopEngineButton.disabled = true

    await stopEngine(carInfo.id)
    switchEngineController.abort()

    cancelAnimationFrame(animationId)

    startEngineButton.disabled = false
    raceButton.disabled = !managedCarButtons.every(
      ({ startEngineButton: checkedStartEngineButton }) => !checkedStartEngineButton.disabled,
    )
    carSVG.style.left = ''
  }

  startEngineButton.addEventListener('click', handleStartEngineClick)
  stopEngineButton.addEventListener('click', handleStopEngineClick)
}
