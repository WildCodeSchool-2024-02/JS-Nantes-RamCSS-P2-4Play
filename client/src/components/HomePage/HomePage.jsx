import CardGame from "./CardGame";
import "./homePage.css";

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

function HomePage() {
  return (
    <>
      {/* render a CardGame component to each element of the props array */}
      <ul>
        {gameItems.map((item) => (
          <CardGame key={item.title} gameItems={item} />
        ))}
      </ul>
    </>
  );
}

export default HomePage;
