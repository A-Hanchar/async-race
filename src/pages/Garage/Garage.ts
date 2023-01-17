import { getCars } from 'api/garage'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { pageSize } from 'variables'

import { ManagedCar } from './components/ManagedCar'
import { TopButtons } from './components/TopButtons'
import styles from './styles.module.css'

export const Garage = async () => {
  const { cars, totalElements } = await getCars({ _limit: pageSize })

  const countElements = totalElements ? `(${totalElements})` : ''

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [Text({ tagName: 'h1', text: `Garage: ${countElements}`, classname: styles.title }), TopButtons()],
  })

  cars.forEach(({ color, id, name }) => {
    wrapper.append(ManagedCar({ carId: id, color, name }))
  })

  return wrapper
}
