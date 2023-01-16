import { getCars } from 'api'
import { createElementWithClassName } from 'helpers'

import { ManagedCar } from './components/ManagedCar'
import { TopButtons } from './components/TopButtons'
import styles from './styles.module.css'

export const Garage = async () => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append('Garage Page', TopButtons())

  const cars = await getCars()

  cars.forEach(({ color, id, name }) => {
    wrapper.append(ManagedCar({ carId: id, color, name }))
  })

  return wrapper
}
