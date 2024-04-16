// import { BrowserRoute } from "react-router-dom";
// import HomePage from "./components/HomePage/HomePage";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
// import GameLayout from "./components/GameLayout";
// import Hangcheese from "./components/Hangcheese/Hangcheese";
// import Taunts from "./components/Taunts/Taunts";
// import Motif from "./components/Motif/Motif";
// import Synaps from "./components/Synaps/Synaps";

function App() {
  // const gameItems = [
  //   {
  //     title: "Fromage pendu",
  //     description: "Trouve le bon mot, sauve un fromage !",
  //     image: "./src/assets/images/fromagependu_img.png",
  //   },
  //   {
  //     title: "Twisted Taunts",
  //     description: "Concealed comebacks",
  //     image: "./src/assets/images/twisted_img.png",
  //   },
  //   {
  //     title: "Mo'tif",
  //     description: "Le jeu qui va vous rendre addic'tif",
  //     image: "./src/assets/images/motif_img.png",
  //   },
  //   {
  //     title: "Synapsyndromes",
  //     description:
  //       "Chaque synapse compte pour démêler le verbe et vous faire naviguer dans un océan de langage ludique !",
  //     image: "./src/assets/images/synap_img.png",
  //   },
  // ];

  return (
    <div>
      {/* <BrowserRouter> */}
      <Navbar />
      <Outlet />
      {/* <Routes>
          <Route path="/" element={<HomePage gameItems={gameItems} />} />
          <Route path="/hangcheese" element={<Hangcheese />} />
          <Route path="/taunts" element={<Taunts />} />
          <Route path="/motif" element={<Motif />} />
          <Route path="/synaps" element={<Synaps />} />
        </Routes> */}
      {/* </BrowserRouter> */}

      {/* <GameLayout /> */}
    </div>
  );
}

export default App;
