const diffInDays = (timestamp: string) => {
  const then = new Date(timestamp)
  const now = new Date()

  const diff = now.getTime() - then.getTime()

  const diffInDays = Math.ceil(diff / (1000 * 3600 * 24))

  // we need to remove any weekends so we will count how many weekends
  // there could be based on the now and then days
  const thenDay = then.getDay()

  // you never know :D
  const weekendLength = 2

  const daysTillWeekend = thenDay <= 5 ? 5 - thenDay : 0

  // at this point we know if it has been in state for less time
  // than a weekend could happen anyway so just bail
  if (diffInDays < daysTillWeekend) {
    return diffInDays
  }

  // remove the 'remainder of the week'
  const daysStillToCalc = diffInDays - daysTillWeekend
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
