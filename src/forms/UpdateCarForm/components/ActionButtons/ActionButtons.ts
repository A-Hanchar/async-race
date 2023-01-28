import { Button } from 'components/Button'
import { createElementWithClassNameAndAppendNode } from 'helpers'

import styles from './styles.module.css'
import { ActionButtonsProps } from './types'

export const ActionButtons = ({ onCancel }: ActionButtonsProps) => {
  const submitButton = Button({
    children: 'Submit',
    type: 'submit',
    classname: [styles.button, styles.submitButton],
    disabled: true,
  })

  const wrapper = createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [
      Button({ children: 'Cancel', type: 'reset', onclick: onCancel, classname: [styles.button, styles.cancelButton] }),
      submitButton,
    ],
  })

  return { wrapper, submitButton }
}
