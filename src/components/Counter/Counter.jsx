import { useReducer, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../../stories/Button";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, {
        counter: state.counter + 1,
      });
    case "DECREMENT":
      return Object.assign({}, state, {
        counter: state.counter - 1,
      });
    case "CHANGEINPUTVALUE":
      return Object.assign({}, state, {
        inputValue: action.payload,
      });
    case "SUBMITINCREMENT":
      return Object.assign({}, state, {
        counter: parseInt(action.payload),
        inputValue: 0,
      });
    default:
      return state;
  }
};

const initialState = { counter: 0, inputValue: 0 };

export default function Counter({ color }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickCounter = (operation) => {
    if (operation === "ADD") {
      dispatch({
        type: "INCREMENT",
      });
    } else {
      dispatch({
        type: "DECREMENT",
      });
    }
  };

  const onChange = (e) => {
    dispatch({
      type: "CHANGEINPUTVALUE",
      payload: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SUBMITINCREMENT",
      payload: parseInt(state.counter) + parseInt(state.inputValue),
    });
  };

  return (
    <div>
      <p data-testid="counter">Counter: {state.counter}</p>
      <Button
        onClick={() => onClickCounter("ADD")}
        label="+"
        style={{ borderRadius: 0 }}
        backgroundColor={"blue"}
      />
      <Button
        onClick={() => onClickCounter()}
        label="-"
        style={{ borderRadius: 0 }}
        backgroundColor={"blue"}
      />
      <form onSubmit={onSubmit}>
        <input
          type="number"
          value={state.inputValue}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

Counter.propTypes = {
  color: PropTypes.string,
};
