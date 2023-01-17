import { Body } from 'components/Body'
import { Button } from 'components/Button'
import { Modal } from 'components/Modal'
import { CreateCarForm } from 'forms/CreateCarForm'

import styles from './styles.module.css'

export const CreateCar = () => {
  let createCarForm: HTMLFormElement
  let modal: HTMLDivElement

  const handleCloseModal = () => {
    Body.removeChild(modal)
  }

  const handleButtonClick = () => {
    createCarForm = CreateCarForm({ onCancel: handleCloseModal })
    modal = Modal({ children: createCarForm, title: 'Create Car' })

    Body.append(modal)
  }

  return Button({ children: 'Create Car', classname: styles.button, onclick: handleButtonClick })
}
