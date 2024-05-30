import React from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { router } from "./router";

const rootElement = document.getElementById("root");

const reactRoot = createRoot(rootElement);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
reactRoot.render(<App />);