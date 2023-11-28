import { useState } from "@rtbjs/use-state";
import { Container } from "./container";

const Display = () => {
  const [count] = useState({
    name: "count",
  });

  return (
    <Container>
      <h3>Display</h3>
      {count}
    </Container>
  );
};

export { Display };
