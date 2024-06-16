import React, { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { router } from "./router";

const rootElement = document.getElementById("root");

const reactRoot = createRoot(rootElement);

function App() {
  return (
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </StrictMode>
  );
}
reactRoot.render(<App />);
