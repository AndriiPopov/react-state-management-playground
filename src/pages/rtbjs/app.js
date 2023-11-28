import { Provider } from "react-redux";
import { store } from "../../app/store-rtbjs";
import { Main } from "./main";

const RTBJS = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export { RTBJS };
