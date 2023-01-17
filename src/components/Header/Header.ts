import { Link } from 'components/Link'
import { createElementWithClassNameAndAppendNode } from 'helpers'
import { routerPath } from 'router'

import styles from './styles.module.css'

export const Header = () =>
  createElementWithClassNameAndAppendNode({
    tagName: 'header',
    classname: styles.header,
    children: [
      Link({ href: routerPath.garage, children: 'Garage', classname: styles.link }),
      Link({ href: routerPath.winners, children: 'Winners', classname: styles.link }),
    ],
  })
