import { Body } from 'components/Body'
import { Button } from 'components/Button'
import { Modal } from 'components/Modal'
import { CreateCarForm } from 'forms/CreateCarForm'

import styles from './styles.module.css'
import { CreateCarProps } from './types'

export const CreateCar = ({ renderGarageContent }: CreateCarProps) => {
  let createCarForm: HTMLFormElement
  let modal: HTMLDivElement

  const handleCloseModal = () => {
    Body.removeChild(modal)
  }

  const handleButtonClick = () => {
    createCarForm = CreateCarForm({ onCancel: handleCloseModal, renderGarageContent })
    modal = Modal({ children: createCarForm, title: 'Create Car' })

    Body.append(modal)
  }

  return Button({ children: 'Create Car', classname: styles.button, onclick: handleButtonClick })
}
