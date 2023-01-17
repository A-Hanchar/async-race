import { startEngine, stopEngine, switchToDriveMode } from 'api/engine'
import { converterPxToRem } from 'utils'

import { carWidth } from '../Car'

/* eslint-disable no-param-reassign */
export const useSwitchEngineButtons = ({
  startEngineButton,
  stopEngineButton,
  carSVG,
  carId,
  road,
}: {
  startEngineButton: HTMLButtonElement
  stopEngineButton: HTMLButtonElement
  carSVG: SVGSVGElement
  carId: number
  road: HTMLDivElement
}) => {
  let animationId: number

  const carAnimation = ({ distance, velocity }: { distance: number; velocity: number }) => {
    const startAnimation = performance.now()
    const duration = distance / velocity

    const startPosition = parseFloat(carSVG.style.left) // rem

    const animation = (time: number) => {
      const maxDistanse = parseFloat(converterPxToRem(road.offsetWidth - carWidth)) // rem
      const progress = (time - startAnimation) / duration
      const newPosition = progress * maxDistanse + startPosition

      carSVG.style.left = `${newPosition}rem`

      if (newPosition < maxDistanse) {
        animationId = requestAnimationFrame(animation)
      }
    }

    animationId = requestAnimationFrame(animation)
  }

  const checkEngine = async () => {
    try {
      await switchToDriveMode(carId)
    } catch (error) {
      cancelAnimationFrame(animationId)
      startEngineButton.disabled = true
      stopEngineButton.disabled = true
    }
  }

  const handleStartEngineClick = async () => {
    startEngineButton.disabled = true

    const { distance, velocity } = await startEngine(carId)

    stopEngineButton.disabled = false

    carAnimation({ distance, velocity })

    checkEngine()
  }

  const handleStopEngineClick = async () => {
    stopEngineButton.disabled = true

    await stopEngine(carId)

    startEngineButton.disabled = false

    cancelAnimationFrame(animationId)
  }

  startEngineButton.addEventListener('click', handleStartEngineClick)
  stopEngineButton.addEventListener('click', handleStopEngineClick)
}
