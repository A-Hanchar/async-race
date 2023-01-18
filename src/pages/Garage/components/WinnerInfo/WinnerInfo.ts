import { Body } from 'components/Body'
import { Modal } from 'components/Modal'
import { createElementWithClassNameAndAppendNode, getCarParamsByName, sessionStorageInstanse } from 'helpers'

import { CloseModalButton } from './components/CloseModalButton'
import { WinnerModalContent } from './components/WinnerModalContent'

import styles from './styles.module.css'

export const WinnerInfo = () => {
  let modalContent: HTMLDivElement
  let modal: HTMLDivElement

  const handleCloseModal = () => {
    Body.removeChild(modal)
  }

  const showModalWinners = () => {
    const winnerData = sessionStorageInstanse.getCurrentWinner()

    if (winnerData) {
      const { car, time } = winnerData

      const { carManufactory = '', carModel = '' } = getCarParamsByName(car.name)

      modalContent = createElementWithClassNameAndAppendNode({
        tagName: 'div',
        children: [
          WinnerModalContent({ manufactory: carManufactory, model: carModel, time }),
          CloseModalButton({ onclick: handleCloseModal }),
        ],
        classname: styles.modalWrapper,
      })

      modal = Modal({ children: modalContent, title: 'Congrats', onCancel: handleCloseModal })

      Body.append(modal)
    }
  }

  return { showModalWinners }
}
