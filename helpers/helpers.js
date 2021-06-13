import moment from 'moment'

export const calculateTotalYear = (experiences) => {
  // eslint-disable-next-line no-console
  // console.log('console logging in helpers', experiences)
  const end = moment(new Date())
  const start = moment('2016-04-18')
  const duration = moment.duration(end.diff(start))
  const years = duration.asYears().toFixed(1)
  return years
}
