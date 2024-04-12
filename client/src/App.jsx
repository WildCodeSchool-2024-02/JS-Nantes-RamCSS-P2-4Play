import HomePage from "./components/HomePage";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  const gameItems = [
    {
      title: "Fromage pendu",
      description: "Trouve le bon mot, sauve un fromage !",
      image:"./src/assets/images/fromagependu_img.png",
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
      description: "Chaque synapse compte pour démêler le verbe et vous faire naviguer dans un océan de langage ludique !",
      image: "./src/assets/images/synap_img.png",
    },
  ]

  return (
  <div>
    <Navbar />
    <HomePage gameItems={gameItems} />
  </div>
  )
};

export default App
