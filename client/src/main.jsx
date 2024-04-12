import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Hangcheese from "./components/Hangcheese";
import Motif from "./components/Motif";
import Synaps from "./components/Synaps";
import Taunts from "./components/Taunts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hangcheese",
    element: <Hangcheese />,
  },
  {
    path: "/taunts",
    element: <Taunts />,
  },
  {
    path: "/motif",
    element: <Motif />,
  },
  {
    path: "/synaps",
    element: <Synaps />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
