import { Button } from 'components/Button'
import { createElementWithClassName } from 'helpers'

import styles from './styles.module.css'
import { ActionButtonsProps } from './types'

export const ActionButtons = ({ onCancel }: ActionButtonsProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  const submitButton = Button({ children: 'Submit', type: 'submit', classname: [styles.button, styles.submitButton] })
  submitButton.disabled = true

  wrapper.append(
    Button({ children: 'Cancel', type: 'reset', onclick: onCancel, classname: [styles.button, styles.cancelButton] }),
    submitButton,
  )

  return { wrapper, submitButton }
}
