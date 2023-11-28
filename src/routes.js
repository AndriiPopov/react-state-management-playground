import { Contents } from "./Contents";
import { NoState } from "./pages/no-state";
import { NoStateWithParent } from "./pages/no-state-with-parent";
import { Redux } from "./pages/redux";
import { UseReducer } from "./pages/usereducer";
import { UseRef } from "./pages/useref";
import { UseRefWithParent } from "./pages/useref-with-parent";
import { UseState } from "./pages/usestate";
import { UseStateFunction } from "./pages/usestate-function";
import { UseStateWithUseRef } from "./pages/usestate-with-useref";
import { PropsDrilling } from "./pages/props-drilling";
import { UseContext } from "./pages/usecontext";
import { ReduxComplex } from "./pages/redux-complex";
import { RTBJSUseState } from "./pages/rtbjs-state";
import { RTBJSLogs } from "./pages/rtbjs-logs";
import { RTBJSRedux } from "./pages/rtbjs-redux";
import { ReduxPersist } from "./pages/redux-persist";
import { RTBJS } from "./pages/rtbjs/app";

const routes = [
  {
    path: "/",
    element: <Contents />,
    name: "Contents",
  },
  {
    path: "no-state",
    element: <NoState />,
    name: "No State",
  },
  {
    path: "no-state-with-parent",
    element: <NoStateWithParent />,
    name: "No State With Parent",
  },
  {
    path: "useref",
    element: <UseRef />,
    name: "UseRef",
  },
  {
    path: "useref-with-parent",
    element: <UseRefWithParent />,
    name: "UseRef With Parent",
  },
  {
    path: "usestate",
    element: <UseState />,
    name: "UseState",
  },
  {
    path: "usestate-function",
    element: <UseStateFunction />,
    name: "UseState Function",
  },
  {
    path: "usestate-with-useref",
    element: <UseStateWithUseRef />,
    name: "UseState With UseRef",
  },
  {
    path: "usereducer",
    element: <UseReducer />,
    name: "UseReducer",
  },
  {
    path: "redux",
    element: <Redux />,
    name: "Redux",
  },
  {
    path: "redux-persist",
    element: <ReduxPersist />,
    name: "Redux Persist",
  },
  {
    path: "props-drilling",
    element: <PropsDrilling />,
    name: "Props Drilling",
  },
  {
    path: "usecontext",
    element: <UseContext />,
    name: "Use Context",
  },
  {
    path: "redux-complex",
    element: <ReduxComplex />,
    name: "Redux Complex",
  },
  {
    path: "rtbjs-state",
    element: <RTBJSUseState />,
    name: "RTBJS UseState",
  },
  {
    path: "rtbjs-logs",
    element: <RTBJSLogs />,
    name: "RTBJS Logs",
  },
  {
    path: "rtbjs-redux",
    element: <RTBJSRedux />,
    name: "RTBJS Redux",
  },
  {
    path: "rtbjs",
    element: <RTBJS />,
    name: "RTBJS",
  },
];

export { routes };
