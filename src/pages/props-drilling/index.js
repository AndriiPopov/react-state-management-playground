import { useState } from "react";

const PropsDrilling = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <h1>Props Drilling</h1>
      <Child increment={increment} />
      <Child2 count={count} />
    </>
  );
};

const Child = ({ increment }) => {
  console.log("Child rerenders");

  return <GrandChild increment={increment} />;
};

const GrandChild = ({ increment }) => {
  return <button onClick={increment}>Increment</button>;
};

const Child2 = ({ count }) => {
  return <div>{count}</div>;
};

export { PropsDrilling };
