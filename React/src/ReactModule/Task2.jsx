import { useEffect, useState } from "react";

export const Task2 = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#4caf50"); 

  useEffect(() => {
    if (count > 10) {
      setColor("#e53935"); 
    } else {
      setColor("#4caf50");
    }
  }, [count]);

  const increaseCounter = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button style={{ backgroundColor: color }} onClick={increaseCounter}>
        Increase
      </button>
    </div>
  );
};
