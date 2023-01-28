import { Button } from 'components/Button'

import styles from './styles.module.css'

export const StopEngine = () =>
  Button({
    children: 'B',
    classname: styles.stopEngineButton,
    disabled: true,
  })
