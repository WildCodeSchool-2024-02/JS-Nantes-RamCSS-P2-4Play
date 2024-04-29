import { NavLink } from "react-router-dom";
import CardGame from "./CardGame";
import "./home-page.css";

const gameItems = [
  {
    title: "Fromage pendu",
    description: "Trouve le bon mot, sauve un fromage !",
    image: "./src/assets/images/fromagependu_img.png",
    link: "/hangcheese",
  },
  {
    title: "Twisted Taunts",
    description: "Antisocial Anagrams",
    image: "./src/assets/images/twisted_img.png",
    link: "/taunts",
  },
  {
    title: "Mo'tif",
    description: "Le jeu qui va vous rendre addic'tif",
    image: "./src/assets/images/motif_img.png",
    link: "/motif",
  },
  {
    title: "Synapsyndromes",
    description: "Tissez des mots, stimulez vos neurones.",
    image: "./src/assets/images/synap_img.png",
    link: "/synaps",
  },
];

function HomePage() {
  const urlbase = "http://localhost:3000";
  return (
    <>
      {/* render a CardGame component to each element of the props array */}
      <ul>
        {gameItems.map((item) => (
          <li key={item.title}>
            <NavLink to={urlbase + item.link}>
              <CardGame gameItems={item} />
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
