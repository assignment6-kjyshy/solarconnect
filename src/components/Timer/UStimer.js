import React from 'react'
import { countries } from './countries'

const UStimer = (props) => {
  const {year, month, date, day } = props

  return <div>{`${countries.US.days[day - 1]} ${countries.US.months[month - 1]} ${date}, ${year}`}</div>
}

export default UStimer