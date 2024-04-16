import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import Hangcheese from "./components/Hangcheese/Hangcheese";
import Taunts from "./components/Taunts/Taunts";
import Motif from "./components/Motif/Motif";
import Synaps from "./components/Synaps/Synaps";

const gameItems = [
  {
    title: "Fromage pendu",
    description: "Trouve le bon mot, sauve un fromage !",
    image: "./src/assets/images/fromagependu_img.png",
  },
  {
    title: "Twisted Taunts",
    description: "Concealed comebacks",
    image: "./src/assets/images/twisted_img.png",
  },
  {
    title: "Mo'tif",
    description: "Le jeu qui va vous rendre addic'tif",
    image: "./src/assets/images/motif_img.png",
  },
  {
    title: "Synapsyndromes",
    description:
      "Chaque synapse compte pour démêler le verbe et vous faire naviguer dans un océan de langage ludique !",
    image: "./src/assets/images/synap_img.png",
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>u done fucked it up</h1>,
    children: [
      {
        path: "",
        element: <HomePage gameItems={gameItems} />,
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
