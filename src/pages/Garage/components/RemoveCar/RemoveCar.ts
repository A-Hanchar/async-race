import { deleteCar } from 'api/garage'
import { Button } from 'components/Button'

import styles from './styles.module.css'
import { RemoveCarProps } from './types'

export const RemoveCar = ({ carId }: RemoveCarProps) => {
  const handleClick = async () => {
    await deleteCar(carId)
  }

  return Button({ children: 'Remove', classname: styles.button, onclick: handleClick })
}
