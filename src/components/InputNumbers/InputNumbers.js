import React from 'react'

const InputNumbers = () => {
  return (
    <form className="inputnumber-container">
      <h3>정렬할 숫자를 적어주세요</h3>
      <textarea className="inputnumber-textarea" placeholder="1,5,67,3..."/>
      
      <button className="inputnumber-button" type="submit">정렬 시작</button>
    </form>
  )
}

export default InputNumbers