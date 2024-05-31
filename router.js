import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/Home";
import Counter from "./src/pages/Counter";
import CounterReducer from "./src/pages/CounterReducer";
import ToDoReducer from "./src/pages/ToDoReducer";
import Callback from "./src/pages/Callback";
import UseRef from "./src/pages/UseRef";

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
    element: <Callback />,
  },
  {
    path: "/useRef",
    element: <UseRef />,
  },
]);
