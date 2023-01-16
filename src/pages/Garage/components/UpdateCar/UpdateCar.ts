import { Body } from 'components/Body'
import { Button } from 'components/Button'
import { Modal } from 'components/Modal'
import { UpdateCarForm } from 'forms/UpdateCarForm'

import styles from './styles.module.css'
import { UpdateCarProps } from './types'

export const UpdateCar = ({ carId }: UpdateCarProps) => {
  const modal = Modal({ children: UpdateCarForm() })

  const handleButtonClick = () => {
    Body.append(modal)
  }

  const button = Button({ children: 'Update', classname: styles.button, onclick: handleButtonClick })

  return button
}
