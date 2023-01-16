import { createElementWithClassName } from 'helpers'

import styles from './styles.module.css'
import { CreateCar } from '../CreateCar'
import { GenerateCars } from '../GenerateCars'
import { Race } from '../Race'
import { Reset } from '../Reset'

export const TopButtons = () => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(CreateCar(), Race(), Reset(), GenerateCars())

  return wrapper
}
