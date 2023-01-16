import { getCarById, updateCar } from 'api'
import { CARS_MANUFACTORY } from 'enums'
import { createElementWithClassName, getCarParamsByName } from 'helpers'
import { addOptionsToSelect } from 'helpers/addOptionsToSelect'
import { modelOptionsByManufactories } from 'variables'

import { ActionButtons } from './components/ActionButtons'
import { ColorPick } from './components/ColorPick'
import { ManufactorySelect } from './components/ManufactorySelect'
import { ModelSelect } from './components/ModelSelect'
import styles from './styles.module.css'
import { UpdateCarProps } from './types'

export const UpdateCarForm = async ({ carId, onCancel }: UpdateCarProps) => {
  const { color, name } = await getCarById(carId)

  const { carManufactory, carModel } = getCarParamsByName(name)

  const form = createElementWithClassName({ tagName: 'form', classname: styles.form })

  const { label: colorLabel, input: colorInput } = ColorPick({ value: color })
  const { label: manufactoryLabel, select: manufactorySelect } = ManufactorySelect({ defaultValue: carManufactory })
  const { label: modelLabel, select: modelSelect } = ModelSelect()
  const { wrapper: actionButtonsWrapper, submitButton } = ActionButtons({ onCancel })

  const updateModelOptions = () => {
    const manufactoryValue = manufactorySelect.value as CARS_MANUFACTORY | ''

    if (manufactoryValue) {
      manufactoryLabel.after(modelLabel)

      modelSelect.replaceChildren()
      addOptionsToSelect({
        select: modelSelect,
        options: modelOptionsByManufactories[manufactoryValue],
        defaultValue: carModel,
      })

      return
    }

    modelLabel.remove()
  }

  submitButton.addEventListener('click', async () => {
    const manufactoryValue = manufactorySelect.value as CARS_MANUFACTORY | ''
    const modelValue = modelSelect.value
    const colorInputValue = colorInput.value

    if (manufactoryValue && modelValue) {
      await updateCar({ color: colorInputValue, manufactory: manufactoryValue, model: modelValue, carId })

      form.reset()
      onCancel()
      updateSubmitButton()
    }
  })

  const updateSubmitButton = () => {
    submitButton.disabled =
      (manufactorySelect.value === carManufactory && modelSelect.value === carModel && colorInput.value === color) ||
      !(manufactorySelect.value && modelSelect.value)
  }

  colorInput.addEventListener('input', updateSubmitButton)
  modelSelect.addEventListener('input', updateSubmitButton)
  manufactorySelect.addEventListener('input', () => {
    updateModelOptions()
    updateSubmitButton()
  })

  form.append(colorLabel, manufactoryLabel, modelLabel, actionButtonsWrapper)

  updateModelOptions()

  return form
}
