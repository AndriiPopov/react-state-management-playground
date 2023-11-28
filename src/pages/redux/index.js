import { Provider } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectCount,
  increment as incrementAction,
  decrement as decrementAction,
  selectIsNotPositive,
} from "../../features/counter/counterSlice";
import { store } from "../../app/store";
import { Counter } from "../../components/counter";

const Redux = () => {
  return (
    <Provider store={store}>
      <Inner />
    </Provider>
  );
};
const Inner = () => {
  const count = useAppSelector(selectCount);
  const isNotPositive = useAppSelector(selectIsNotPositive);
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(incrementAction());
  };

  const incrementAsync = () => {
    setTimeout(() => {
      dispatch(incrementAction());
    }, 5000);
  };

  const logCountWithDelay = () => {
    setTimeout(() => {
      console.log(count);
    }, 5000);
  };

  const decrement = () => {
    dispatch(decrementAction());
  };

  return (
    <>
      <Counter
        title="Redux Counter"
        increment={increment}
        decrement={decrement}
        count={count}
      />
      <button onClick={incrementAsync}>Async increment</button>
      <button onClick={logCountWithDelay}>Log count in 5 seconds</button>
      <div>{isNotPositive ? "Count is not positive" : ""}</div>
    </>
  );
};

export { Redux };
