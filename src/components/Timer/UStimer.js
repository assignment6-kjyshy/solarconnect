import React from 'react'
import { countries } from './countries'

const UStimer = (props) => {
  const {krDates} = props

  const year = krDates.getFullYear()
  const month = krDates.getMonth()
  const date = krDates.getDate()
  const day = krDates.getDay()

  return <div>{`${countries.US.days[day - 1]} ${countries.US.months[month]} ${date}, ${year}`}</div>
}

export default UStimer