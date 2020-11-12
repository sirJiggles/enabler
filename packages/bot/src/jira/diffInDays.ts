const diffInDays = (timestamp: string, includeWeekends: boolean = true) => {
  const then = new Date(timestamp)
  const now = new Date()

  const diff = now.getTime() - then.getTime()

  const daysDiff = Math.ceil(diff / (1000 * 3600 * 24))

  // if you do not care if it is a weekend or not just bail now
  if (includeWeekends) {
    return daysDiff
  }

  // we need to remove any weekends so we will count how many weekends
  // there could be based on the now and then days
  const thenDay = then.getDay()

  // you never know :D
  const weekendLength = 2

  const daysTillWeekend = thenDay <= 5 ? 5 - thenDay : 0

  // at this point we know if it has been in state for less time
  // than a weekend could happen anyway so just bail
  if (daysDiff < daysTillWeekend) {
    return daysDiff
  }

  // remove the 'remainder of the week'
  const daysStillToCalc = daysDiff - daysTillWeekend
  // how many weekends are in those days left over
  const weekendsInThoseDays = Math.ceil(daysStillToCalc / 7)
  // how many weekdays are left over if we remove those weekend days
  const daysAfterWeekendsRemoved =
    daysStillToCalc - weekendLength * weekendsInThoseDays

  // add the 'remainder of the week' to the amount of workdays we have
  // ... we got there 😅
  return daysTillWeekend + daysAfterWeekendsRemoved
}

export default diffInDays
