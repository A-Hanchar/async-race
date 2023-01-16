import { GitHubLink } from 'components/GitHubLink'
import { RSLogo } from 'components/RSLogo'
import { createElementWithClassName } from 'helpers'

import styles from './styles.module.css'

export const Footer = () => {
  const footer = createElementWithClassName({ tagName: 'footer', classname: styles.footer })

  footer.append(RSLogo({ color: 'gold' }), GitHubLink({ userId: 'A-Hanchar' }))

  return footer
}
