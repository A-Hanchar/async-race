export type InputProps = {
  type?:
    | 'button'
    | 'checkbox'
    | 'file'
    | 'hidden'
    | 'image'
    | 'password'
    | 'radio'
    | 'reset'
    | 'submit'
    | 'text'
    | 'color'
  classname?: string
  defaultValue?: string
  value?: string
  placeholder?: string
}
