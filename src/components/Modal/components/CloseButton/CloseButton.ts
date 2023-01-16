import { Button } from 'components/Button'

import styles from './styles.module.css'
import { CloseButtonProps } from './types'

export const CloseButton = ({ onclick }: CloseButtonProps) => Button({ children: '', classname: styles.close, onclick })
