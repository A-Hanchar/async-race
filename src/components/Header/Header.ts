import { Link } from 'components/Link'
import { createElementWithClassName } from 'helpers'
import { routerPath } from 'router'

import styles from './styles.module.css'

export const Header = () => {
  const header = createElementWithClassName({ tagName: 'header', classname: styles.header })

  header.append(
    Link({ href: routerPath.garage, children: 'Garage', classname: styles.link }),
    Link({ href: routerPath.winners, children: 'Winners', classname: styles.link }),
  )

  return header
}
