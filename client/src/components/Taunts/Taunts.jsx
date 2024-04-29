import { useState, useEffect, useRef } from "react";
import KeyboardContainer from "../keyboard/KeyboardContainer";
import TauntGame from "./TauntGame";
import FourSquareSpinner from "../Spinner/FourSquareSpinner";
import "./taunts.css";

function Taunts() {
  const [input, setInput] = useState("");
  const [insult, setInsult] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // function to not display keyboard if GameOver is true
  function getKeyboardClass() {
    if (gameOver) return "game-over-kb";
    return "";
  }
  // fetch function to retrieve a random id from the api, and set the insult for the current game.
  async function getInsult() {
    const baseURL =
      "https://my-json-server.typicode.com/brewost/words-api/insults";
    const insultID = Math.ceil(Math.random() * 30);
    const insultURL = `${baseURL}/${insultID}`;
    const response = await fetch(insultURL);
    const newInsult = await response.json();
    setInsult(newInsult);
  }
  // useRef aropund the get insult function to stop double rendering due to react strict mode.
  const initialised = useRef(false);
  useEffect(() => {
    if (!initialised.current) {
      initialised.current = true;
      getInsult();
    }
  }, []);

  return (
    <div className="taunts">
      <h1>Twisted Taunts</h1>
      {!insult ? (
        <FourSquareSpinner />
      ) : (
        <TauntGame
          insult={insult}
          input={input}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
      )}
      <div className={getKeyboardClass()}>
        <KeyboardContainer input={input} setInput={setInput} />
      </div>
    </div>
  );
}

export default Taunts;
