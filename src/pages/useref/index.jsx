import { useRef } from "react";
import { Counter } from "../../components/counter";

const UseRef = () => {
  const count = useRef(0);
  console.log("Value at start rendering", count.current);

  const increment = () => {
    count.current++;
    console.log("Value after increment", count.current);
  };

  const decrement = () => {
    count.current--;
    console.log("Value after decrement", count.current);
  };

  return (
    <Counter
      title="UseRef"
      increment={increment}
      decrement={decrement}
      count={count.current}
    />
  );
};

export { UseRef };
