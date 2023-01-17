import { Body } from 'components/Body'
import { Button } from 'components/Button'
import { Modal } from 'components/Modal'
import { CreateCarForm } from 'forms/CreateCarForm'

import styles from './styles.module.css'

export const CreateCar = () => {
  const resetCreateCarForm = () => {
    createCarForm.reset()
  }

  const handleCloseModal = () => {
    Body.removeChild(modal)
  }

  const handleButtonClick = () => {
    Body.append(modal)
  }

  const createCarForm = CreateCarForm({ onCancel: handleCloseModal })
  const modal = Modal({ children: createCarForm, title: 'Create Car', onCancel: resetCreateCarForm })

  return Button({ children: 'Create Car', classname: styles.button, onclick: handleButtonClick })
}
