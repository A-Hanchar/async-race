import { Button } from 'components/Button'

import styles from './styles.module.css'

export const GenerateCars = () => {
  const button = Button({ children: 'Generate Cars', classname: styles.button })

  return button
}
