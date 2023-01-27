import React, { useState } from "react";

import "./WriteSentenceInput.css";

const WriteSentenceInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [finalSentence, setFinalSentence] = useState("");

  const setOnChange = (e) => {
    setInputValue(e.target.value);
  }

  // const interval = setInterval(() => {
  //   console.log('This will run every second!');
  // }, 1000);

  const onSubmit = (e) => {
    e.preventDefault();
    setFinalSentence(inputValue);
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