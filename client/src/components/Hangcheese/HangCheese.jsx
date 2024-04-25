import { useState, useEffect, useRef } from "react";
import KeyboardContainer from "../keyboard/KeyboardContainer";
import "./hangcheese.css";
import HangcheeseDrawing from "./HangcheeseDrawing";
// import HangcheeseWord from "./HangcheeseWord";
// import HangcheeseKeyboard from "./HangcheeseKeyboard";

function HangCheese() {
  const [input, setInput] = useState(""); // input initialisé avec une chaîne vide (pour le clavier)
  const [fromage, setFromage] = useState(null);
  console.warn(fromage);

  /* useEffect(() => {
    const randomNum = Math.ceil(Math.random() * 30);

    fetch(
      `https://my-json-server.typicode.com/brewost/words-api/fromage/${randomNum}`
    )
      .then((res) => res.json())
      .then((cheeseData) => setFromage(cheeseData));
  }, []); // useEffect assure que la fonction getFromage() est appelée quand le composant HangCheese est appelé.
*/

  async function getFromage() {
    const baseURL =
      "https://my-json-server.typicode.com/brewost/words-api/fromage";
    const fromageID = Math.ceil(Math.random() * 30);
    const fromageURL = `${baseURL}/${fromageID}`;
    const response = await fetch(fromageURL);
    const newFromage = await response.json();
    setFromage(newFromage);
  }

  const initialised = useRef(false);
  useEffect(() => {
    if (!initialised.current) {
      initialised.current = true;
      getFromage();
    }
  }, []);

  return (
    <div className="fromageStyle">
      <h1>Le fameux et excellent jeu du fromage pendu !</h1>
      <HangcheeseDrawing />

      {/* <HangcheeseWord fromage={fromage} /> */}
      {/* <HangcheeseKeyboard /> */}

      <KeyboardContainer input={input} setInput={setInput} />
    </div>
  );
}

export default HangCheese;
