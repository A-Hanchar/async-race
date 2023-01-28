import { Body } from 'components/Body'
import { Button } from 'components/Button'
import { Modal } from 'components/Modal'
import { UpdateCarForm } from 'forms/UpdateCarForm'

import styles from './styles.module.css'
import { UpdateCarProps } from './types'

export const UpdateCar = ({ carId, renderGarageContent }: UpdateCarProps) => {
  let modal: HTMLDivElement
  let updateCarForm: HTMLFormElement

  const handleCloseModal = () => {
    Body.removeChild(modal)
  }

  const handleButtonClick = async () => {
    updateCarForm = await UpdateCarForm({ onCancel: handleCloseModal, carId, renderGarageContent })

    modal = Modal({ children: updateCarForm, title: 'Update Car' })

    Body.append(modal)
  }

  const button = Button({ children: 'Update', classname: styles.button, onclick: handleButtonClick })

  return button
}
