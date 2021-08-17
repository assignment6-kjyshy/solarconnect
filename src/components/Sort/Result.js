import { useMemo } from "react";
import { memo } from "react";
const Result = props => {
  const content = useMemo(() => {
    return props.value.join(",");
  }, [props]);
  return <div>{content}</div>;
};

export const MemoResult = memo(Result);
