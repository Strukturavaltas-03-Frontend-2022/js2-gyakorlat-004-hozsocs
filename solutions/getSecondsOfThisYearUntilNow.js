const getSecondsOfThisYearUntilNow = (startDate = new Date()) => {
  let min = 0

  min = (Math.round((Date.now() - startDate.getTime()) / 1000))

  return min
}

export default getSecondsOfThisYearUntilNow
