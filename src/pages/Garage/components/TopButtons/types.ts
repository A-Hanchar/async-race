import { ManagedCarButtons } from 'pages/Garage/types'

export type TopButtonsProps = {
  managedCarButtons: ManagedCarButtons[]
  renderGarageContent: () => Promise<void>
}
