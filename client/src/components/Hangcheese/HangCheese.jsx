import { useState, useEffect } from "react";
import KeyboardContainer from "../keyboard/KeyboardContainer";
import "./hangcheese.css";
import HangcheeseDrawing from "./HangcheeseDrawing";
// import HangcheeseWord from "./HangcheeseWord";
// import HangcheeseKeyboard from "./HangcheeseKeyboard";

function HangCheese() {
  const [input, setInput] = useState(""); // input initialisé avec une chaîne vide (pour le clavier)
  const [fromage, setFromage] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [badGuesses, setBadGuesses] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6); // Nombre de tentatives restantes

  useEffect(() => {
    const randomNum = Math.ceil(Math.random() * 30);
    function emptyAnswer(cheese) {
      return new Array(cheese.length).fill("-").join("");
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
        setRemainingAttempts(remainingAttempts - 1); // Décrémenter le nombre de tentatives restantes
        // TODO: advance hangman graphic by one step
      } else {
        for (let i = 0; i < fromage.fromage.length; i += 1) {
          if (fromage.fromage[i].toUpperCase() === currentInputLetter) {
            newAnswer[i] = fromage.fromage[i].toUpperCase(); // Remplacement des tirets par la lettre correcte aux bonnes positions
          }
        }

        setAnswer(newAnswer.join("")); // Mise à jour de la réponse avec les lettres correctes

        // TODO: good letter condition
        // newAnswer = answer
        // loop over fromage.fromage letters
        // if fromage letter.toLowerCase = currentInputLetter.toLowerCase
        // newAnswer[i] = currentInputLetter
        // after loop: setAnswer(newAnswer)
      }
    }
  }, [input, fromage]);
  return (
    <div className="fromageStyle">
      <h1>Le fameux et excellent jeu du fromage pendu !</h1>
      <div style={{ fontSize: "2rem" }}>{fromage && fromage.fromage}</div>
      <div style={{ fontSize: "2rem" }}>{answer && answer}</div>
      <div style={{ fontSize: "2rem", textDecoration: "line-through" }}>
        {badGuesses}
      </div>
      <div>
        Il te reste {remainingAttempts} chances avant de finir en fondue...
      </div>{" "}
      {/* Afficher le nombre de tentatives restantes */}
      <HangcheeseDrawing />
      <KeyboardContainer input={input} setInput={setInput} />
    </div>
  );
}
export default HangCheese;
