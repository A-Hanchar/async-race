import { Button } from 'components/Button'

import styles from './styles.module.css'

export const Race = () => {
  const button = Button({ children: 'Race', classname: styles.button })

  return button
}
