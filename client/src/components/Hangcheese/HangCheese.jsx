import { useState, useEffect } from "react";
import KeyboardContainer from "../keyboard/KeyboardContainer";
import "./hangcheese.css";
import HangcheeseDrawing from "./HangcheeseDrawing";
import EndMessage from "./EndMessage";

function HangCheese() {
  const [input, setInput] = useState(""); // input initialisé avec une chaîne vide (pour le clavier)
  const [fromage, setFromage] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [badGuesses, setBadGuesses] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(5); // Nombre de tentatives restantes
  const [endMessage, setEndMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const randomNum = Math.ceil(Math.random() * 30); // génère un nombre aléatoire entre 1 et 30
    function emptyAnswer(cheese) {
      // fonction qui prend cheese en paramètre
      return new Array(cheese.length).fill("-").join(""); // retourne une chaine de la même longueu que cheese
    }

    /* function emptyAnswer crée une chaine de tirets 
        de la même longueur que le fromage sélectionné
    */

    fetch(
      `https://my-json-server.typicode.com/brewost/words-api/fromage/${randomNum}`
    )
      .then((res) => res.json())
      .then((cheeseData) => {
        setFromage(cheeseData);
        setAnswer(emptyAnswer(cheeseData.fromage.toUpperCase()));
      });
  }, []);

  // useEffect assure que la fonction getFromage() est appelée quand le composant HangCheese est appelé.

  useEffect(() => {
    if (fromage && input.length > 0) {
      const currentInputLetter = input[input.length - 1].toUpperCase();
      // bad letter condition
      const newAnswer = answer.split(""); // création d'une copie de la réponse pour la modifier

      if (!fromage.fromage.toUpperCase().includes(currentInputLetter)) {
        setBadGuesses([...badGuesses, currentInputLetter.toUpperCase()]);
        setRemainingAttempts((prevValue) => prevValue - 1); // Décrémenter le nombre de tentatives restantes
        // TODO: advance hangman graphic by one step
      } else {
        for (let i = 0; i < fromage.fromage.length; i += 1) {
          if (fromage.fromage[i].toUpperCase() === currentInputLetter) {
            newAnswer[i] = fromage.fromage[i].toUpperCase(); // Remplacement des tirets par la lettre correcte aux bonnes positions
          }
        }

        setAnswer(newAnswer.join("")); // Mise à jour de la réponse avec les lettres correctes
      }

      if (newAnswer.join("") === fromage.fromage.toUpperCase()) {
        setEndMessage("Bravo");
        setGameOver(true);
      }
    }
  }, [input, fromage, setGameOver, answer]);

  useEffect(() => {
    if (remainingAttempts === 0 && input !== answer) {
      setEndMessage("Perdu");
      setGameOver(true);
    }
  }, [remainingAttempts]);

  return (
    <div className="fromageStyle">
      <h1>Fromage Pendu</h1>
      {gameOver && (
        <EndMessage
          endMessage={endMessage}
          solution={fromage.fromage.toUpperCase()}
        />
      )}

      <div>
        <div
          style={{
            fontSize: "2rem",
            color: "#2cbfe2",
            fontFamily: "Grandstander",
          }}
        >
          {answer && answer}
        </div>
        <div
          style={{
            fontSize: "2rem",
            textDecoration: "line-through",
            color: "#2cbfe2",
            fontFamily: "Grandstander",
          }}
        >
          {badGuesses}
        </div>
        <div
          style={{
            fontSize: "2rem",
            color: "#2cbfe2",
            fontFamily: "Grandstander",
          }}
        />
        <HangcheeseDrawing remainingAttempts={remainingAttempts} />
        <div style={gameOver ? { display: "none" } : {}}>
          <KeyboardContainer input={input} setInput={setInput} />
        </div>
      </div>
    </div>
  );
}
export default HangCheese;
