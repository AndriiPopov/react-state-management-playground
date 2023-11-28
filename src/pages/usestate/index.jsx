import { useState } from "react";
import { Counter } from "../../components/counter";

const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Counter
      title="UseState"
      increment={increment}
      decrement={decrement}
      count={count}
    />
  );
};

export { UseState };
