import { useState } from "@rtbjs/use-state";
import { Provider } from "react-redux";
import { store } from "../../app/store-rtbjs";
import { Counter } from "../../components/counter";

const RTBJSUseState = () => {
  return (
    <Provider store={store}>
      <Inner />
    </Provider>
  );
};

const Inner = () => {
  const [count, setCount] = useState({
    initialValue: 0,
  });

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Counter
      title="RTBJS UseState"
      increment={increment}
      decrement={decrement}
      count={count}
    />
  );
};

export { RTBJSUseState };
