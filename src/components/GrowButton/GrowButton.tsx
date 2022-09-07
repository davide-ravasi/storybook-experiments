import React, { useEffect, useState } from 'react'


interface GrowButtonProps {
  width: number;
  height: number;
}

const GrowButton = ({ width, height }: GrowButtonProps) => {
  const [grower, setGrower] = useState(0);
  const [course, setCourse] = useState(true);
  const maxSize = 20;
  const growingRate = 5;
  let interval;

  useEffect(() => {
    if (grower <= maxSize) {
      interval = setInterval(() => {
        setGrower(grower + growingRate);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [grower, course]);

  return (
    <button onClick={() => setCourse(!course)} style={{ width: width + grower, height: height + grower }}>{course ? "growing" : "shrinking"}</button>
  )
}

export default GrowButton;