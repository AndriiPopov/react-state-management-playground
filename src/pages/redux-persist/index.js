import { Provider } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectCount,
  increment as incrementAction,
  decrement as decrementAction,
} from "../../features/counter/counterSlice";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../../app/store-persist";
import { Counter } from "../../components/counter";

const ReduxPersist = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Inner />
      </PersistGate>
    </Provider>
  );
};
const Inner = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(incrementAction());
  };

  const decrement = () => {
    dispatch(decrementAction());
  };

  return (
    <Counter
      title="No state with parent"
      increment={increment}
      decrement={decrement}
      count={count}
    />
  );
};

export { ReduxPersist };
