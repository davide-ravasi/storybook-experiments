import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../../stories/Button";

export default function Counter({ color }) {
  const [counter, setCounter] = useState(0);
  const onClickCounter = (operation) => {
    if (operation === "ADD") {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <p data-testid="counter">Counter: {counter}</p>
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
    </div>
  );
}

Counter.propTypes = {
  color: PropTypes.string,
};
