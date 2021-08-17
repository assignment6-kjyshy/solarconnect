import { useMemo } from "react";
import { memo } from "react";
import "./style.css";
const Result = props => {
  const content = useMemo(() => {
    return props.value.join(", ");
  }, [props]);
  return (
    <div className="result-container">
      <h3>{props.title}</h3>
      <div className="result-content">{content}</div>
    </div>
  );
};

export const MemoResult = memo(Result);
