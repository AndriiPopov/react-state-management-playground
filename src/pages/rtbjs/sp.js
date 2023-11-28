import { useState } from "@rtbjs/use-state";
import { Container } from "./container";
import { Display } from "./display";

const SP = () => {
  const [count, setCount] = useState({
    initialValue: 0,
    name: "count",
  });

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Container>
      <h3>SP</h3>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </Container>
  );
};

export { SP };
