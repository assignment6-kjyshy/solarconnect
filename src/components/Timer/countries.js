export const countries = {
  KR: {
    days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
  },
  US: {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  }
}

export const krFormatter = (dateObj, countries) => {
  return (`${dateObj.year}년 ${dateObj.month}월 ${dateObj.date}일 ${countries.KR.days[dateObj.day]}`)
}

export const usFormatter = (dateObj, countries) => {
  return (`${countries.US.days[dateObj.day]} ${countries.US.months[dateObj.month - 1]} ${dateObj.date}, ${dateObj.year}`)
}