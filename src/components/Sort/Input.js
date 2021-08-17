export const Input = ({ onSubmit, value, placeholder, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input value={value} placeholder={placeholder} onChange={onChange}></input>
      <button type="submit">정렬 시작</button>
    </form>
  );
};
