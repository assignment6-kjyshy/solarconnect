import React, {useState, useEffect} from 'react'
import { countries } from './countries'

const Timer = (props) => {
  const { country } = props
  const [time, setTime] = useState({})
  const [clock, setClock] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const tick = () => {
      const localDate = new Date()
      const LOCAL_OFFSET = localDate.getTimezoneOffset() * 60 * 1000
      const KR_OFFSET = 9 * 60 * 60 * 1000
      const UTC = localDate.getTime() + LOCAL_OFFSET 
      const krDate = new Date(UTC + KR_OFFSET)
      
      setTime({
        year: krDate.getFullYear(),
        month: krDate.getMonth() + 1,
        date: krDate.getDate(),
        day: krDate.getDay(),
        hour: krDate.getHours(),
        minute: krDate.getMinutes(),
        second: krDate.getSeconds(),
      })
    }

    const timer = setInterval(() => tick(), 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (time.year && time.month && time.date && time.day && time.hour && time.minute && time.second) {
      setIsLoading(false)
  }}, [time])

  useEffect(() => {
    let h = time.hour
    let m = time.minute;
    let s = time.second;
    let session;

    if (h >= 12) {
      h = h - 12;
      session = "PM"
    } else {
      session = "AM"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    setClock(`${h}:${m}:${s} ${session}`)
  }, [time])

  return (
    <div className="timer-container">
      {isLoading ? <div className="timer-loader">Setting Timer...</div> : (
      <div className="timer-content"> 
      <div className="timer-date">{countries[country].formatter(time, countries[country])}</div>
      <div className="timer-clock">{clock}</div>
      </div>
      )}
    </div>
  )
}

export default Timer