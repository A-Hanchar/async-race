import { createCar } from 'api/garage'
import { CARS_MANUFACTORY } from 'enums'
import { addOptionsToSelect, createElementWithClassNameAndAppendNode } from 'helpers'
import { EmptyString } from 'types'
import { modelOptionsByManufactories } from 'variables'

import { ActionButtons } from './components/ActionButtons'
import { ColorPick } from './components/ColorPick'
import { ManufactorySelect } from './components/ManufactorySelect'
import { ModelSelect } from './components/ModelSelect'
import styles from './styles.module.css'
import { CreateCarFormProps } from './types'

export const CreateCarForm = ({ onCancel }: CreateCarFormProps) => {
  const { label: colorLabel, input: colorInput } = ColorPick()
  const { label: manufactoryLabel, select: manufactorySelect } = ManufactorySelect()
  const { label: modelLabel, select: modelSelect } = ModelSelect()
  const { wrapper: actionButtonsWrapper, submitButton } = ActionButtons({ onCancel })

  const updateSubmitButton = () => {
    submitButton.disabled = !(manufactorySelect.value && modelSelect.value)
  }

  manufactorySelect.addEventListener('input', () => {
    const manufactoryValue = manufactorySelect.value as CARS_MANUFACTORY | EmptyString

    if (manufactoryValue) {
      manufactoryLabel.after(modelLabel)

      modelSelect.replaceChildren()
      addOptionsToSelect({ select: modelSelect, options: modelOptionsByManufactories[manufactoryValue] })

      return
    }

    modelLabel.remove()
  })

  modelSelect.addEventListener('input', updateSubmitButton)

  submitButton.addEventListener('click', async () => {
    const manufactoryValue = manufactorySelect.value as CARS_MANUFACTORY | ''
    const modelValue = modelSelect.value
    const color = colorInput.value

    if (manufactoryValue && modelValue) {
      await createCar({ color, manufactory: manufactoryValue, model: modelValue })

      form.reset()
      onCancel()
      updateSubmitButton()
    }
  })

  const form = createElementWithClassNameAndAppendNode({
    tagName: 'form',
    classname: styles.form,
    children: [colorLabel, manufactoryLabel, actionButtonsWrapper],
  })

  return form
}
