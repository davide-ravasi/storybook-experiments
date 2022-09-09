import React, { useEffect, useState } from 'react'

type GrowingRate = 1 | 2 | 3 | 4 | 5;

interface GrowButtonProps {
  width: number;
  height: number;
  growingrate: GrowingRate;
}

const GrowButton = ({ width, height, growingrate }: GrowButtonProps) => {
  const [grower, setGrower] = useState(0);
  const [course, setCourse] = useState(true);
  const maxSize = 20;
  let interval;

  useEffect(() => {
    if (Math.abs(grower) <= Math.abs(maxSize)) {
      interval = setInterval(() => {
        setGrower(grower + ((course ? 1 : -1) * growingrate));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [grower, course]);

  return (
    <button className="shadow appearance-none border rounded w-full py-2 px-3" onClick={() => setCourse(!course)} style={{ width: width + grower, height: height + grower }}>{course ? "growing" : "shrinking"}</button>
  )
}

export default GrowButton;