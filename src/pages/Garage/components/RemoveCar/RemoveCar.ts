import { Button } from 'components/Button'

import styles from './styles.module.css'
import { RemoveCarProps } from './types'

export const RemoveCar = ({ carId }: RemoveCarProps) => {
  const button = Button({ children: 'Remove', classname: styles.button })

  return button
}
