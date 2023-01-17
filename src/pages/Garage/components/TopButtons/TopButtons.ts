import { createElementWithClassNameAndAppendNode } from 'helpers'

import styles from './styles.module.css'
import { CreateCar } from '../CreateCar'
import { GenerateCars } from '../GenerateCars'
import { Race } from '../Race'
import { Reset } from '../Reset'

export const TopButtons = () =>
  createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [CreateCar(), Race(), Reset(), GenerateCars()],
  })
