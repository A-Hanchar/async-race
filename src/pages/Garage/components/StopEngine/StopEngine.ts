import { Button } from 'components/Button'

import styles from './styles.module.css'
import { StopEngineProps } from './types'

export const StopEngine = ({ carId }: StopEngineProps) => {
  const button = Button({ children: 'B', classname: styles.stopEngineButton })

  return button
}
