import { SESSION_STORAGE_KEY } from 'enums'

export type PaginationProps = {
  totalElements: number
  size: number
  renderContent: () => Promise<void>
  key: SESSION_STORAGE_KEY.CURRENT_GARAGE_PAGE | SESSION_STORAGE_KEY.CURRENT_WINNER_PAGE
}
