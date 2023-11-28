import { useReducer } from "react";
import { Counter } from "../../components/counter";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const newCount = state.count + action.payload;
      return { ...state, count: newCount, isNotPositive: newCount <= 0 };
    }
    case "decrement": {
      const newCount = state.count - action.payload;
      return { ...state, count: newCount, isNotPositive: newCount <= 0 };
    }
    default:
      return state;
  }
};

const initialState = { count: 0, isNotPositive: true };

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "increment", payload: 1 });
  };

  const incrementAsync = () => {
    setTimeout(() => {
      dispatch({ type: "increment", payload: 1 });
    }, 5000);
  };

  const logCountWithDelay = () => {
    setTimeout(() => {
      console.log(state.count);
    }, 5000);
  };

  const decrement = () => {
    dispatch({ type: "decrement", payload: 1 });
  };

  return (
    <>
      <Counter
        title="useReducer"
        increment={increment}
        decrement={decrement}
        count={state.count}
      />
      <button onClick={incrementAsync}>Async increment</button>
      <button onClick={logCountWithDelay}>Log count in 5 seconds</button>
      <div>{state.isNotPositive ? "Count is not positive" : ""}</div>
    </>
  );
};

export { UseReducer };
