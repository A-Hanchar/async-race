import { Body } from 'components/Body'
import { Button } from 'components/Button'
import { Modal } from 'components/Modal'
import { CreateCarForm } from 'forms/CreateCarForm'

import styles from './styles.module.css'

export const CreateCar = () => {
  const handleCloseModal = () => {
    Body.removeChild(modal)
  }

  const handleButtonClick = () => {
    Body.append(modal)
  }

  const modal = Modal({ children: CreateCarForm({ onCancel: handleCloseModal }), title: 'Create Car' })

  const button = Button({ children: 'Create Car', classname: styles.button, onclick: handleButtonClick })

  return button
}
