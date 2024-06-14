import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/Home";
import Counter from "./src/pages/Counter";
import CounterReducer from "./src/pages/CounterReducer";
import ToDoReducer from "./src/pages/ToDoReducer";
import UseRef from "./src/pages/hooks/UseRef";
import Props from "./src/pages/props/Props";
import ClassComponent from "./src/pages/ClassComponent";
import SetStateComponent from "./src/pages/SetStateComponent";
import ControlledInput from "./src/pages/ControlledInput";
import LifeCycle from "./src/pages/LifeCycye";
import ReduxCounter from "./src/pages/redux/ReduxCounter";
import CountrySelector from "./src/pages/CountrySelector";
import VirtualDOM from "./src/pages/VirtualDOM";
import ImportExport from "./src/pages/ImportExport";
import UseState from "./src/pages/hooks/useState";
import Hooks from "./src/pages/hooks/Hooks";
import UseMemo from "./src/pages/hooks/UseMemo";
import UseCallback from "./src/pages/hooks/UseCallback";
import ChildProps from "./src/pages/child_props/ChildProps";
import Portal from "./src/pages/Portal";
import Todo from "./src/pages/todo/Todo";
import UseEffect from "./src/pages/hooks/UseEffect";
import ReactContext from "./src/pages/react_context/ReactContext";
import HigherOrderComponent from "./src/pages/higher_order/HigherOrderComponent";
import Timer from "./src/pages/Timer";

const Lazycomp = lazy(() => import("./src/pages/LazyComponent"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/counter2",
    element: <CounterReducer />,
  },
  {
    path: "/todo",
    element: <ToDoReducer />,
  },
  {
    path: "/callback",
    element: <UseState />,
  },
  {
    path: "/useRef",
    element: <UseRef />,
  },
  {
    path: "/props",
    element: <Props />,
  },
  {
    path: "/classComponent",
    element: <ClassComponent />,
    children: [{ path: "setState", element: <SetStateComponent /> }],
  },
  {
    path: "/controlledInput",
    element: <ControlledInput />,
  },
  {
    path: "/lifecycle",
    element: <LifeCycle />,
  },
  {
    path: "/reduxcounter",
    element: <ReduxCounter />,
  },
  {
    path: "/countryselector",
    element: <CountrySelector />,
  },
  {
    path: "/virtualdom",
    element: <VirtualDOM />,
  },
  {
    path: "/importexport",
    element: <ImportExport />,
  },
  {
    path: "/childprops",
    element: <ChildProps />,
  },
  {
    path: "/portal",
    element: <Portal />,
  },
  {
    path: "/todoapp",
    element: <Todo />,
  },
  {
    path: "/reactcontext",
    element: <ReactContext />,
  },
  {
    path: "/hocomponent",
    element: <HigherOrderComponent />,
  },
  {
    path: "/timer",
    element: <Timer />,
  },
  {
    path: "/lazycomponent",
    element: (
      <Suspense>
        <Lazycomp />
      </Suspense>
    ),
  },
  {
    path: "/hooks",
    element: <Hooks />,
    children: [
      {
        path: "usememo",
        element: <UseMemo />,
      },
      {
        path: "usecallback",
        element: <UseCallback />,
      },
      {
        path: "useref",
        element: <UseRef />,
      },
      {
        path: "useeffect",
        element: <UseEffect />,
      },
    ],
  },
]);
