import { PropsWithChildren } from 'types'

export type LinkProps = PropsWithChildren<{
  href: string
  target?: '_blank' | '_self' | '_top' | 'framename'
  classname?: string
  type?: 'gold'
}>
