export type TextTagName = Pick<HTMLElementTagNameMap, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'>

export type TextProps<T extends keyof HTMLElementTagNameMap = keyof TextTagName> = {
  tagName: T
  classname?: string
  text?: string
}
