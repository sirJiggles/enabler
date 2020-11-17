import { Schedule } from '../../config/types'

const isWithinSchedule = (schedule?: Schedule) => {
  if (!schedule || !schedule.days) {
    return true
  }

  const { days, hourFrom, hourUntil } = schedule
  const date = new Date()
  const day = date.getDay()

  // if we are not on one of the days to run something
  if (!(days.filter((d) => d === day).length > 0)) {
    return false
  }

  const currentHour = date.getHours()

  if (hourFrom && currentHour < hourFrom) {
    return false
  }
  if (hourUntil && currentHour >= hourUntil) {
    return false
  }

  return true
}

export default isWithinSchedule
