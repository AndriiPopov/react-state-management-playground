import { Provider } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectCount,
  increment as incrementAction,
} from "../../features/counter/counterSlice";
import { store } from "../../app/store";

const ReduxComplex = () => {
  return (
    <Provider store={store}>
      <Inner />
    </Provider>
  );
};

const Inner = () => {
  return (
    <>
      <h1>Redux Complex</h1>
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
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(incrementAction());
  };
  return <button onClick={increment}>Increment</button>;
};

const Child2 = () => {
  const count = useAppSelector(selectCount);
  return <div>{count}</div>;
};

export { ReduxComplex };
