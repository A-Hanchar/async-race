import { Button } from 'components/Button'

import styles from './styles.module.css'
import { StartEngineProps } from './types'

export const StartEngine = ({ carId }: StartEngineProps) =>
  Button({ children: 'A', classname: styles.startEngineButton })
