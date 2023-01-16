import { getCars } from 'api'
import { createElementWithClassName } from 'helpers'

import { CreateCar } from './components/CreateCar'

import { ManagedCar } from './components/ManagedCar'
import styles from './styles.module.css'

export const Garage = async () => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append('Garage Page', CreateCar())

  const cars = await getCars()

  cars.forEach(({ color, id, name }) => {
    wrapper.append(ManagedCar({ carId: id, color, name }))
  })

  return wrapper
}
