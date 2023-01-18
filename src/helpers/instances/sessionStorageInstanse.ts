import { SESSION_STORAGE_KEY } from 'enums'
import { ICar } from 'interfaces'

type SessionStorageWinner = {
  car: ICar
  time: number // ms
}

class SessionStorageInstanse {
  getValue<T>(key: SESSION_STORAGE_KEY): T | null {
    const item = sessionStorage.getItem(key)

    if (item) {
      return JSON.parse(item) as T
    }

    return null
  }

  hasCurrentWinner() {
    return Boolean(this.getValue(SESSION_STORAGE_KEY.CURRENT_WINNER))
  }

  getCurrentWinner() {
    return this.getValue<SessionStorageWinner>(SESSION_STORAGE_KEY.CURRENT_WINNER)
  }

  setCurrentWinner(winner: SessionStorageWinner) {
    sessionStorage.setItem(SESSION_STORAGE_KEY.CURRENT_WINNER, JSON.stringify(winner))
  }

  removeCurrentWinner() {
    sessionStorage.removeItem(SESSION_STORAGE_KEY.CURRENT_WINNER)
  }
}

export const sessionStorageInstanse = new SessionStorageInstanse()
