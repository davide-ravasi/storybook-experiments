import React, { useEffect, useState } from "react";

import "./WriteSentenceInput.css";

const WriteInterval = (arr: string[]) => {
  // const [sentence, setSentence] = useState("");
  console.log(arr);
  //useEffect(() => {
  let count = 0;
  const interval = setInterval(() => {
    //setSentence(arr[count]);
    console.log(arr[count]);
    count++;

    if (count === arr.length - 1) clearInterval(interval);
  }, 1000);
  //return () => clearInterval(interval);
  //}, [arr]);

  return "prova";
}

const WriteSentenceInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [finalSentence, setFinalSentence] = useState("");

  const setOnChange = (e) => {
    setInputValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // WriteInterval(inputValue.split(" "));
    setFinalSentence(WriteInterval(inputValue.split(" ")));
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input className="shadow appearance-none border rounded w-full py-2 px-3" type="text" value={inputValue} onChange={setOnChange} />
      </form>
      <div>{finalSentence}</div>
    </div>
  )
}

export default WriteSentenceInput;