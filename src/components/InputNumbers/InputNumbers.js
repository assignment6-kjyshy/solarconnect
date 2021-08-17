import React from 'react'

const InputNumbers = () => {
  return (
    <form className="inputnumber-container">
      <h3>정렬할 숫자를 적어주세요</h3>
      <textarea className="inputnumber-textarea">1 5 10 45 2 78...</textarea>
      <button className="inputnumber-button" type="submit">정렬 시작</button>
    </form>
  )
}

export default InputNumbers