import { createWinner, getWinnerById, updateWinnerById } from 'api/winners'
import { sessionStorageInstanse } from 'helpers'
import { one } from 'variables'

export const setWinner = async () => {
  const winnerData = sessionStorageInstanse.getCurrentWinner()

  if (!winnerData) {
    return
  }

  const { car: currentWinnerCar, time: currentWinnerTime } = winnerData

  try {
    const { time, wins, id } = await getWinnerById(currentWinnerCar.id)

    const bestWinnerTime = Math.min(currentWinnerTime, time)

    await updateWinnerById({ carId: id, time: bestWinnerTime, wins: wins + one })
  } catch (error) {
    await createWinner({ time: currentWinnerTime, id: currentWinnerCar.id })
  }
}
