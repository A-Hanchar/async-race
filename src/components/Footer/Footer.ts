import { GitHubLink } from 'components/GitHubLink'
import { RSLogo } from 'components/RSLogo'
import { createElementWithClassNameAndAppendNode } from 'helpers'

import styles from './styles.module.css'

export const Footer = () =>
  createElementWithClassNameAndAppendNode({
    tagName: 'footer',
    classname: styles.footer,
    children: [RSLogo({ color: 'gold' }), GitHubLink({ userId: 'A-Hanchar' })],
  })
