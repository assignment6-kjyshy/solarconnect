export const countries = {
  KR: {
    title: "오늘은",
    days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    formatter: function (dateObj, base) {
      return (`${dateObj.year}년 ${dateObj.month}월 ${dateObj.date}일 ${base.days[dateObj.day]}`)
    }
  },
  US: {
    title: "Today is",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    formatter: function (dateObj, base) {
      return (`${base.days[dateObj.day]} ${base.months[dateObj.month - 1]} ${dateObj.date}, ${dateObj.year}`)
    }
  }
}

export const getKRDate = () => {
  const localDate = new Date()
  const LOCAL_OFFSET = localDate.getTimezoneOffset() * 60 * 1000
  const KR_OFFSET = 9 * 60 * 60 * 1000
  const UTC = localDate.getTime() + LOCAL_OFFSET 
  const krDate = new Date(UTC + KR_OFFSET)

  return ({
    year: krDate.getFullYear(),
    month: krDate.getMonth() + 1,
    date: krDate.getDate(),
    day: krDate.getDay(),
    hour: krDate.getHours(),
    minute: krDate.getMinutes(),
    second: krDate.getSeconds(),
  })
}