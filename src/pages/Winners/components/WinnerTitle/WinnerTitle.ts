import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'

import styles from './styles.module.css'
import { WinnerTitleProps } from './types'
import { Car } from '../Car'

export const WinnerTitle = ({ carName, color, orderNumber }: WinnerTitleProps) => {
  const carNameTitle = Text({ tagName: 'h2', text: `${orderNumber}. ${carName}`, classname: styles.title })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [carNameTitle, Car({ color })],
  })

  return wrapper
}
