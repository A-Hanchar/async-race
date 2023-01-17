import rustedCar from 'assets/images/rusted-car.png'
import { Image } from 'components/Image'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import { createElementWithClassNameAndAppendNode } from 'helpers'

import { routerPath } from 'router'

import styles from './styles.module.css'

export const NotFound = () =>
  createElementWithClassNameAndAppendNode({
    tagName: 'div',
    classname: styles.wrapper,
    children: [
      Image({
        src: rustedCar,
        alt: 'Page Not Found',
        classname: styles.image,
      }),
      Text({ tagName: 'h1', text: 'Page Not Found', classname: styles.title }),
      Link({ href: routerPath.home, children: 'Go Home', classname: styles.button }),
    ],
  })
