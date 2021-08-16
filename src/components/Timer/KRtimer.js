import React from 'react'
import { countries } from './countries'

const KRtimer = (props) => {
  const {krDates} = props

  const year = krDates.getFullYear()
  const month = krDates.getMonth() + 1;
  const date = krDates.getDate()
  const day = krDates.getDay()

  return <div>{`${year}년 ${month}월 ${date}일 ${countries.KR.days[day - 1]}`}</div>
}

export default KRtimer