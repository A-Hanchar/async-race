import { oneSecond, three } from 'variables'

export const convertMsToSec = (timeMs: number) => (timeMs / oneSecond).toFixed(three)
