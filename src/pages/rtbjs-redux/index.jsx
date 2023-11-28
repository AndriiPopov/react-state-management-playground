import { Provider } from "react-redux";
import { store } from "../../app/store-rtbjs";
import { useState } from "@rtbjs/use-state";

const RTBJSRedux = () => {
  return (
    <Provider store={store}>
      <Inner />
    </Provider>
  );
};

const Inner = () => {
  return (
    <>
      <Child />
      <Child2 />
    </>
  );
};

const Child = () => {
  console.log("Child rerenders");

  return <GrandChild />;
};

const GrandChild = () => {
  const [count, setCount] = useState({
    name: "count",
    initialValue: 5,
  });

  const increment = () => {
    setCount(count + 1);
  };
  return <button onClick={increment}>Increment</button>;
};

const Child2 = () => {
  const [count] = useState({
    name: "count",
    initialValue: 3,
    // forceInitialValue: true,
  });
  return <div>{count}</div>;
};

export { RTBJSRedux };
