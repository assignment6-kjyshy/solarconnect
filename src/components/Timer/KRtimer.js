import React from 'react'
import { countries } from './countries'

const KRtimer = (props) => {
  const {year, month, date, day } = props

  return <div>{`${year}년 ${month}월 ${date}일 ${countries.KR.days[day]}`}</div>
}

export default KRtimer