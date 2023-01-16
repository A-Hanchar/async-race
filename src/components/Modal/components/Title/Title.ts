import { Text } from 'components/Text'

import styles from './styles.module.css'
import { TitleProps } from './types'

export const Title = ({ title }: TitleProps) => Text({ tagName: 'h2', text: title, classname: styles.title })
