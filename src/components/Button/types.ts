import { PropsWithChildren } from 'types'

export type ButtonProps = PropsWithChildren<{
  classname?: string | Array<string | undefined>
  onclick?: () => void | Promise<void>
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
}>
