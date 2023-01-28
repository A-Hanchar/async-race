import { Button } from 'components/Button'

import styles from './styles.module.css'
import { RaceProps } from './types'

export const Race = ({ onclick }: RaceProps) => Button({ children: 'Race', classname: styles.button, onclick })
