import { createContext, useContext, useState } from "react";

const Context = createContext(null);

const UseContext = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <Context.Provider value={{ count, increment }}>
      <h1>Use Context</h1>
      <Child />
      <Child2 />
    </Context.Provider>
  );
};

const Child = () => {
  console.log("Child rerenders");
  return <GrandChild />;
};

const GrandChild = () => {
  const { increment } = useContext(Context);

  return <button onClick={increment}>Increment</button>;
};

const Child2 = () => {
  const { count } = useContext(Context);
  return <div>{count}</div>;
};

export { UseContext };
