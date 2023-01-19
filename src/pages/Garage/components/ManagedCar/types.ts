export type ManagedCarProps = {
  color: string
  carId: number
  name: string
  startEngineButtons: HTMLButtonElement[]
  stopEngineButtons: HTMLButtonElement[]
  raceButton: HTMLButtonElement
  renderGarageContent: () => Promise<void>
}
