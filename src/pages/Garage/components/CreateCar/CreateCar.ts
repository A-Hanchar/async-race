import { Body } from 'components/Body'
import { Button } from 'components/Button'
import { Modal } from 'components/Modal'
import { CreateCarForm } from 'forms/CreateCarForm'

import styles from './styles.module.css'

export const CreateCar = () => {
  const modal = Modal({ children: CreateCarForm() })

  const handleButtonClick = () => {
    Body.append(modal)
  }

  const button = Button({ children: 'Create Car', classname: styles.button, onclick: handleButtonClick })

  return button
}
