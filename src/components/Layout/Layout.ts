import { Body } from 'components/Body'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { addClassnameToElement, createElementWithClassName } from 'helpers'
import { PropsWithChildren } from 'types'

import styles from './styles.module.css'

export const Layout = ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()
  const main = createElementWithClassName({ tagName: 'main', classname: styles.main })

  children && main.append(children)

  fragment.append(Header(), main, Footer())

  addClassnameToElement({ element: Body, classname: styles.body })

  return fragment
}
