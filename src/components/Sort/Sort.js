import { useState } from "react";
import { Input } from "./Input";
import { MemoResult } from "./Result";
import { sort } from "./sorting";
export const Sort = () => {
  const [input, setInput] = useState([]);
  const [results, setResults] = useState({
    firstResult: [],
    secondResult: [],
  });

  const onChange = e => {
    const { value } = e.target;
    const nextValue = value.split(",");
    setInput(nextValue);
  };

  const onSubmit = e => {
    e.preventDefault();
    const content = sort(input);

    setTimeout(() => {
      setResults(pre => ({
        ...pre,
        secondResult: [...content].reverse(),
      }));
    }, 3000);

    setResults(pre => ({
      ...pre,
      firstResult: [...content],
      secondResult: [],
    }));
  };

  return (
    <>
      <Input onSubmit={onSubmit} value={input} onChange={onChange} placeholder="ex) 1,2,3,4"></Input>
      <MemoResult value={results.firstResult}></MemoResult>
      <MemoResult value={results.secondResult}></MemoResult>
    </>
  );
};
