import { ChangeEvent, FormEvent, useState } from "react";

const half = (number) => number / 2;
const double = (number) => number * 2;
const increment = (number) => number + 1;
const decrement = (number) => number - 1;

const CustomProgram = () => {
  const [initialProgramValue, setInitialProgramValue] = useState(0);
  const [programState, setProgramState] = useState('? -> My Function -> ?');
  const [sequence, setSequence] = useState<string[]>([]);

  const inputCss = "shadow appearance-none border rounded w-full my-1 py-2 px-3";

  const buttonCss = "inline-block my-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full";

  const addFunction = (fnName: string) => {
    const newSequence = [...sequence];
    newSequence.push(fnName);
    setSequence(newSequence);
  }

  const changeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setInitialProgramValue(parseInt(e.target.value));
  }

  const clearFunctions = () => {
    setSequence([]);
  }

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let value = initialProgramValue;
    sequence.forEach((el: string) => {
      value = eval(`${el}(${value})`);
    })

    setSequence([]);
    setProgramState(initialProgramValue + ' -> My Function -> ' + value)
    setInitialProgramValue(0);
  }

  return (
    <div>
      <div data-testid="button-wrapper" className="flex mb-4">
        <button className={buttonCss} type="button" onClick={() => addFunction("half")}>Half</button>
        <button className={buttonCss} type="button" onClick={() => addFunction("double")}>Double</button>
        <button className={buttonCss} type="button" onClick={() => addFunction("increment")}>Increment</button>
        <button className={buttonCss} type="button" onClick={() => addFunction("decrement")}>Decrement</button>
        <button className={buttonCss} type="button" onClick={() => clearFunctions()}>Clear</button>
      </div>
      <div className="mb-8 text-center">
        <h1 id="function-list-heading">My Function</h1>
        {(sequence.length !== 0) ? <ul aria-labelledby="function-list-heading">
          {sequence.map((el, index) => <li key={index}>{el}</li>)}
        </ul> : <p data-testid="no-functions-text">no sequence available</p>}
      </div>
      <div className="">
        <form onSubmit={(e) => submitForm(e)}>
          <label htmlFor="initialValue">Insert initial value</label>
          <input id="initialValue" className={inputCss} type="number" value={initialProgramValue} onChange={(e) => changeNumber(e)} />
          <button className={buttonCss} type="submit">Submit</button>
        </form>
      </div>
      <div className="mt-4 text-center">
        <h2 data-testid="program-results">{programState}</h2>
      </div>
    </div>
  )
};

export default CustomProgram;


/*
https://medium.com/@justin.sherman/react-coding-interview-challenge-17-cf0497674b23
*/