import { getCarById } from 'api/garage'
import { createElementWithClassNameAndAppendNode } from 'helpers'

import styles from './styles.module.css'
import { WinnerInfoBlockProps } from './types'
import { WinnerDescription } from '../WinnerDescription'
import { WinnerTitle } from '../WinnerTitle'

export const WinnerInfoBlock = async ({ carId, time, wins, orderNumber }: WinnerInfoBlockProps) => {
  const { color, name } = await getCarById(carId)

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [WinnerTitle({ color, carName: name, orderNumber }), WinnerDescription({ time, wins })],
  })

  wrapper.style.color = color

  return wrapper
}
