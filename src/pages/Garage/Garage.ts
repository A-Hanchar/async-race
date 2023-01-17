import { getCars } from 'api/garage'
import { createElementWithClassNameAndAppendNode } from 'helpers'

import { ManagedCar } from './components/ManagedCar'
import { TopButtons } from './components/TopButtons'
import styles from './styles.module.css'

export const Garage = async () => {
  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: ['Garage Page', TopButtons()],
  })

  const cars = await getCars()

  cars.forEach(async ({ color, id, name }) => {
    wrapper.append(await ManagedCar({ carId: id, color, name }))
  })

  return wrapper
}
