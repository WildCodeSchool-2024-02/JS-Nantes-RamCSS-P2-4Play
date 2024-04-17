import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import Hangcheese from "./components/Hangcheese/Hangcheese";
import Taunts from "./components/Taunts/Taunts";
import Motif from "./components/Motif/Motif";
import Synaps from "./components/Synaps/Synaps";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>u done fucked it up</h1>,
    children: [
      {
        path: "",
        element: <HomePage />,
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
    ],
  },
]);
export default router;
