import React from 'react'
import { countries } from './countries'

const Timer = (props) => {
  const { country } = props

  const localDate = new Date()
  const LOCAL_OFFSET = localDate.getTimezoneOffset() * 60 * 1000
  const KR_OFFSET = 9 * 60 * 60 * 1000
  const UTC = localDate.getTime() + LOCAL_OFFSET 
  const krDate = new Date(UTC + KR_OFFSET)

  const dateObj = {
    year: krDate.getFullYear(),
    month: krDate.getMonth() + 1,
    date: krDate.getDate(),
    day: krDate.getDay()
  }

  return (
    <div>
      <h2>{country} timer</h2>
      <div>{country && countries[country].formatter(dateObj, countries[country])}</div>
    </div>
  )
}

export default Timer