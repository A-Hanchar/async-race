export type UpdateCarProps = {
  carId: number
  onCancel: () => void
  renderGarageContent: () => Promise<void>
}
