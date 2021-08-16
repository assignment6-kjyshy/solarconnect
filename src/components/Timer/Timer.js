import React from 'react'
import { krFormatter, usFormatter, countries } from './countries'

const Timer = (props) => {
  const { country } = props

  const localDate = new Date()
  const UTC = localDate.getTime() + (localDate.getTimezoneOffset() * 60 * 1000) 
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000 
  //const utctime = Date.now()
  //console.log(UTC)
  //console.log(utctime)
  const krDate = new Date(UTC + KR_TIME_DIFF)
  console.log(krDate)

  const dateObj = {
    year: krDate.getFullYear(),
    month: krDate.getMonth() + 1,
    date: krDate.getDate(),
    day: krDate.getDay()
  }

  return (
    <div>
      <h2>{country} timer</h2>
      <div>{country === "KR" && krFormatter(dateObj, countries)}</div>
      <div>{country === "US" && usFormatter(dateObj, countries)}</div>
    </div>
  )
}

export default Timer