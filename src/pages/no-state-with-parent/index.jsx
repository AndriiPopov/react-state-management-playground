import { useState } from "react";
import { Counter } from "../../components/counter";

const NoStateWithParent = () => {
  const [, setCount] = useState(0);
  return <NoState setCount={setCount} />;
};

const NoState = ({ setCount }) => {
  let count = 0;
  console.log("Value at start rendering", count);

  const increment = () => {
    count++;
    setCount(count);
  };

  const decrement = () => {
    count--;
    setCount(count);
  };

  return (
    <Counter
      title="No state with parent"
      increment={increment}
      decrement={decrement}
      count={count}
    />
  );
};

export { NoStateWithParent };
