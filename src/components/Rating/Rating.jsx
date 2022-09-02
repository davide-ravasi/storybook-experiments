import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const Rating = ({ number = 5 }) => {
  const [selected, setSelected] = useState(-1);

  return [...Array(number)].map((n, i) => (
    <Star selected={i < selected} onSelect={() => setSelected(i + 1)} />
  ));
};

const Star = ({ selected, onSelect = (f) => f }) => (
  <FaStar color={selected ? "#ffcb45" : "#f2f2f2"} onClick={onSelect} />
);

Rating.propTypes = {
  number: PropTypes.number,
};

export default Rating;
