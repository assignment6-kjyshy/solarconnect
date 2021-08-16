import React from 'react'
import KRtimer from './KRtimer'
import UStimer from './UStimer'

const Timer = (props) => {
  const { country } = props

  const curr = new Date()
  const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000) 
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000 
  const kr_curr = new Date(utc + KR_TIME_DIFF)

  return (
    <div>
      <h2>{country} timer</h2>
      {country === "KR" && <KRtimer krDates={kr_curr} />}
      {country === "US" && <UStimer krDates={kr_curr} />}
    </div>
  )
}

export default Timer