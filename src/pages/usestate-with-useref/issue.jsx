import { useState } from "react";
import { Counter } from "../../components/counter";

const Issue = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const logCountWithDelay = () => {
    setTimeout(() => {
      console.log(count);
    }, 5000);
  };

  return (
    <>
      <Counter
        title="Issue"
        increment={increment}
        decrement={decrement}
        count={count}
      />
      <button onClick={logCountWithDelay}>Log count in 5 seconds</button>
    </>
  );
};

export { Issue };
