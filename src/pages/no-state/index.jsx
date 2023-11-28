import { Counter } from "../../components/counter";

const NoState = () => {
  console.log("Start");
  let count = 0;

  const increment = () => {
    count++;
    console.log(count);
  };

  const decrement = () => {
    count--;
    console.log(count);
  };

  return (
    <Counter
      title="No state"
      increment={increment}
      decrement={decrement}
      count={count}
    />
  );
};

export { NoState };
