export const countries = {
  KR: {
    days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    formatter: function (dateObj, countries) {
      return (`${dateObj.year}년 ${dateObj.month}월 ${dateObj.date}일 ${countries.days[dateObj.day]}`)
    }
  },
  US: {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    formatter: function (dateObj, countries) {
      return (`${countries.days[dateObj.day]} ${countries.months[dateObj.month - 1]} ${dateObj.date}, ${dateObj.year}`)
    }
  }
}