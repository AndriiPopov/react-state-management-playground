import { useState } from "react";
import { Counter } from "../../components/counter";

const UseStateFunction = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  const incrementWithFunction = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const incrementAsync = () => {
    setTimeout(() => {
      setCount((prevValue) => prevValue + 1);
    }, 5000);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Counter
        title="UseStateFunction"
        increment={increment}
        decrement={decrement}
        count={count}
      />
      <button onClick={incrementWithFunction}>Better increment</button>
      <button onClick={incrementAsync}>Async increment</button>
    </>
  );
};

export { UseStateFunction };
