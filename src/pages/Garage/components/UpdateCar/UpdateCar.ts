import { Body } from 'components/Body'
import { Button } from 'components/Button'
import { Modal } from 'components/Modal'
import { UpdateCarForm } from 'forms/UpdateCarForm'

import styles from './styles.module.css'
import { UpdateCarProps } from './types'

export const UpdateCar = async ({ carId }: UpdateCarProps) => {
  const resetUpdateCarForm = () => {
    // updateCarForm.reset()
  }

  const handleCloseModal = () => {
    Body.removeChild(modal)
  }

  const handleButtonClick = () => {
    Body.append(modal)
  }

  const updateCarForm = await UpdateCarForm({ onCancel: handleCloseModal, carId })

  const modal = Modal({ children: updateCarForm, title: 'Update Car', onCancel: resetUpdateCarForm })

  const button = Button({ children: 'Update', classname: styles.button, onclick: handleButtonClick })

  return button
}
