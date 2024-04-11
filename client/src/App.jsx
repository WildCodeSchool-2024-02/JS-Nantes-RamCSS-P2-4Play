import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  const gameItems = [
    {
      title: "Fromage pendu",
      description: "Trouve le bon mot, sauve un fromage !",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWfVNkdGC8nPGakjzYP97v4KAtjRloLpJbG5WKij9LQ&s",
    },
    {
      title: "Twisted Taunts",
      description: "Concealed comebacks",
      image: "https://image.spreadshirtmedia.net/image-server/v1/compositions/T631A2PA4699PT17X20Y52D312881145W25000H15787/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/pirate-patrie-anagramme-jeu-de-mots-t-shirt-femme.jpg",
    },
    {
      title: "Mo'tif",
      description: "Le jeu qui va vous rendre addic'tif",
      image: "https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/medias-tele/le-jeu-sutom-anagramme-de-motus-a-failli-disparaitre-ce-jeudi-4101649/58374352-1-fre-FR/Le-jeu-SUTOM-anagramme-de-MOTUS-a-failli-disparaitre-ce-jeudi.jpg",
    },
    {
      title: "Synapsyndromes",
      description: "Chaque synapse compte pour démêler le verbe et vous faire naviguer dans un océan de langage ludique !",
      image: "https://i.notretemps.com/800x450/smart/2021/07/22/mots-melanges.jpg",
    },
  ]

  return <div>
    <HomePage gameItems={gameItems} />
  </div>;
}

export default App
