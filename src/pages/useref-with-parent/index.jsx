import { useRef, useState } from "react";
import { Counter } from "../../components/counter";

const UseRefWithParent = () => {
  const [, setCount] = useState(0);
  return <NoState setCount={setCount} />;
};

const NoState = ({ setCount }) => {
  const count = useRef(0);
  console.log("Value at start rendering", count.current);

  const increment = () => {
    count.current++;
    setCount(count.current);
  };

  const decrement = () => {
    count.current--;
    setCount(count.current);
  };

  return (
    <Counter
      title="UseRef with parent"
      increment={increment}
      decrement={decrement}
      count={count.current}
    />
  );
};

export { UseRefWithParent };
