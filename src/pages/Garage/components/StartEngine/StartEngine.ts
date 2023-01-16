import { Button } from 'components/Button'

import styles from './styles.module.css'
import { StartEngineProps } from './types'

export const StartEngine = ({ carId }: StartEngineProps) => {
  const button = Button({ children: 'A', classname: styles.startEngineButton })

  return button
}
