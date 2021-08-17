import { useState } from "react";
import { Input } from "../Input";
import { MemoResult } from "../Result";
import { sort } from "./sorting";
import "./style.css";
export const Sort = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState({
    firstResult: [],
    secondResult: [],
  });

  const onChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const arrInput = input.split(",");
    const content = sort(arrInput);
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
      <div className="sort-result-wrapper">
        <MemoResult title="오름차순 정렬 결과" value={results.firstResult}></MemoResult>
        <MemoResult title="내림차순 정렬 결과" value={results.secondResult}></MemoResult>
      </div>
    </>
  );
};
