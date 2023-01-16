import { createElementWithClassName } from 'helpers'

export const EmptyOption = () => {
  const option = createElementWithClassName({ tagName: 'option' })

  option.value = ''
  option.textContent = '-- // --'

  return option
}
