import { Text } from 'components/Text'

import styles from './styles.module.css'
import { CarTitleprops } from './types'

export const CarTitle = ({ color, name }: CarTitleprops) => {
  const title = Text({ tagName: 'h3', classname: styles.title, text: name })

  title.style.color = color

  return title
}
