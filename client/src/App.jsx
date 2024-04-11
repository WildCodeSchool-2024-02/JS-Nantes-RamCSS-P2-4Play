import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  const gameItems = [
    {
      title: "Fromage pendu",
      description: "Trouve le bon mot, sauve un fromage !",
      image: "",
    },
    {
      title: "Twisted Taunts",
      description: "Concealed comebacks",
      image: "",
    },
    {
      title: "Mo'tif",
      description: "Le jeu qui va vous rendre addic'tif",
      image: "",
    },
    {
      title: "Synapsyndromes",
      description: "Chaque synapse compte pour démêler le verbe et vous faire naviguer dans un océan de langage ludique !",
      image: "",
    },
  ]

  return <div>
    <HomePage gameItems={gameItems} />
  </div>;
}

export default App
