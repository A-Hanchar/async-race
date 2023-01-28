import { ManagedCarButtons, TopButtonsData } from 'pages/Garage/types'

export type ManagedCarProps = {
  color: string
  carId: number
  name: string
  managedCarButtons: ManagedCarButtons[]
  renderGarageContent: () => Promise<void>
  topControlButtons: TopButtonsData
}
