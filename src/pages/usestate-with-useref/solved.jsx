import { useRef, useState } from "react";
import { Counter } from "../../components/counter";

const Solved = () => {
  const [count, setCount] = useState(0);
  const currentCount = useRef(count);
  currentCount.current = count;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const logCountWithDelay = () => {
    setTimeout(() => {
      console.log(currentCount.current);
    }, 5000);
  };

  return (
    <>
      <Counter
        title="Solved"
        increment={increment}
        decrement={decrement}
        count={count}
      />
      <button onClick={logCountWithDelay}>Log count in 5 seconds</button>
    </>
  );
};

export { Solved };
