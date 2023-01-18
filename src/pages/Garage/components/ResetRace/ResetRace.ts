import { Button } from 'components/Button'

import styles from './styles.module.css'
import { ResetRaceProps } from './types'

export const ResetRace = ({ onclick }: ResetRaceProps) =>
  Button({ children: 'Reset Race', classname: styles.button, disabled: true, onclick })
