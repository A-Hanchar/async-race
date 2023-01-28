import { Button } from 'components/Button'

import styles from './styles.module.css'
import { CloseModalButtonProps } from './types'

export const CloseModalButton = ({ onclick }: CloseModalButtonProps) =>
  Button({ children: 'Got It!', classname: styles.button, onclick })
