import React, { useState } from "react";

import "./WriteSentenceInput.css";

const WriteSentenceInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [finalSentence, setFinalSentence] = useState("");

  let interval;

  const setOnChange = (e) => {
    setInputValue(e.target.value);
  }

  const writeFinalSentence = () => {
    const arrSentence = inputValue.split(" ");
    let counter = 0;
    let newSentence = '';

    interval = setInterval(() => {
      newSentence = newSentence + ' ' + arrSentence[counter];
      arrSentence[counter] ? setFinalSentence(newSentence) : clearInterval(interval);
      counter++;
    }, 1000);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    writeFinalSentence();
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