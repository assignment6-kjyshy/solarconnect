import "./style.css";

export const Input = ({ onSubmit, value, placeholder, onChange }) => {
  return (
    <form className="inputnumber-container" onSubmit={onSubmit}>
      <h3>정렬할 숫자를 적어주세요</h3>
      <textarea className="inputnumber-textarea" value={value} placeholder={placeholder} onChange={onChange}></textarea>
      <button className="inputnumber-button" type="submit">
        정렬 시작
      </button>
    </form>
  );
};
