import { useState, useEffect } from "react";
import KeyboardContainer from "../keyboard/KeyboardContainer";
import "./hangcheese.css";
import HangcheeseDrawing from "./HangcheeseDrawing";
import HangcheeseWord from "./HangcheeseWord";

function HangCheese() {
  const [input, setInput] = useState(""); // input initialisé avec une chaîne vide (pour le clavier)
  const [fromage, setFromage] = useState(null);
  console.warn(fromage);

  useEffect(() => {
    const randomNum = Math.ceil(Math.random() * 30);

    fetch(
      `https://my-json-server.typicode.com/brewost/words-api/fromage/${randomNum}`
    )
      .then((res) => res.json())
      .then((cheeseData) => setFromage(cheeseData));
  }, []); // useEffect assure que la fonction getFromage() est appelée quand le composant HangCheese est appelé.

  return (
    <div className="fromageStyle">
      <h1>Le fameux et excellent jeu du fromage pendu !</h1>
      <HangcheeseDrawing />
      <HangcheeseWord />
      <KeyboardContainer input={input} setInput={setInput} />
    </div>
  );
}

export default HangCheese;
