import { PropsWithChildren } from 'types'

export const Layout = ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()
  const main = document.createElement('main')

  children && main.append(children)

  fragment.append('Header', main, 'Footer')

  return fragment
}
