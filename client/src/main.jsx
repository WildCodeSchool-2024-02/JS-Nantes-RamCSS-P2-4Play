import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./router";

// import App from "./App";

// import App from "./App";
// import Hangcheese from "./components/Hangcheese/Hangcheese";
// import Motif from "./components/Motif/Motif";
// import Synaps from "./components/Synaps/Synaps";
// import Taunts from "./components/Taunts/Taunts";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/hangcheese",
//     element: <Hangcheese />,
//   },
//   {
//     path: "/taunts",
//     element: <Taunts />,
//   },
//   {
//     path: "/motif",
//     element: <Motif />,
//   },
//   {
//     path: "/synaps",
//     element: <Synaps />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
