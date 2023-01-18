import { getCars } from 'api/garage'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { pageCarsSize } from 'variables'

import { ManagedCar } from './components/ManagedCar'
import { TopButtons } from './components/TopButtons'
import styles from './styles.module.css'

export const Garage = async () => {
  const { cars, totalElements } = await getCars({ _limit: pageCarsSize })

  const countElements = totalElements ? `(${totalElements})` : ''

  const startEngineButtons: HTMLButtonElement[] = []
  const stopEngineButtons: HTMLButtonElement[] = []

  const { wrapper: topButtonsWrapper, raceButton } = TopButtons({ startEngineButtons, stopEngineButtons })

  const managedCars = cars.map(({ color, id, name }) =>
    ManagedCar({ carId: id, color, name, startEngineButtons, raceButton, stopEngineButtons }),
  )

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [
      Text({ tagName: 'h1', text: `Garage: ${countElements}`, classname: styles.title }),
      topButtonsWrapper,
      ...managedCars,
    ],
  })

  return wrapper
}
