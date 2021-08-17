import React, {useState, useEffect} from 'react'
import { countries, getKRDate } from './timerUtils'

const Timer = (props) => {
  const { country } = props
  const [time, setTime] = useState(getKRDate())
  const [clock, setClock] = useState("")

  useEffect(() => {
    const timer = setInterval(() => setTime(getKRDate()), 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

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
      <div className="timer-content"> 
        <div className="timer-date">{countries[country].formatter(time, countries[country])}</div>
        <div className="timer-clock">{clock}</div>
      </div>
    </div>
  )
}

export default Timer