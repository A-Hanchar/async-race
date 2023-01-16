import { Button } from 'components/Button'

import styles from './styles.module.css'

export const Reset = () => {
  const button = Button({ children: 'Reset', classname: styles.button })

  return button
}
