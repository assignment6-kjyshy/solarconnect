import React from 'react'
import KRtimer from './KRtimer'
import UStimer from './UStimer'

const Timer = (props) => {
  const { country } = props

  const userDate = new Date()
  const utc = userDate.getTime() + (userDate.getTimezoneOffset() * 60 * 1000) 
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000 
  const krDate = new Date(utc + KR_TIME_DIFF)

  const year = krDate.getFullYear()
  const month = krDate.getMonth() + 1
  const date = krDate.getDate()
  const day = krDate.getDay()

  return (
    <div>
      <h2>{country} timer</h2>
      {country === "KR" && <KRtimer year={year} month={month} date={date} day={day}/>}
      {country === "US" && <UStimer year={year} month={month} date={date} day={day}/>}
    </div>
  )
}

export default Timer