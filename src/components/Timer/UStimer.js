import React from 'react'
import { countries } from './countries'

const UStimer = (props) => {
  const {year, month, date, day } = props

  return <div>{`${countries.US.days[day]} ${countries.US.months[month - 1]} ${date}, ${year}`}</div>
}

export default UStimer