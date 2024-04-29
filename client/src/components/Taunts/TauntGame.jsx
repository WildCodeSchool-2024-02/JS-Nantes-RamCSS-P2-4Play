import { useState, useEffect } from "react";
import EndMessage from "./EndMessage";

// get random number
function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
// Convert String to array
function scrambledInsult(insult) {
  const arr = insult.slang.split("");
  const n = arr.length;

  // Get random of [0, n-1]
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < n - 1; i++) {
    const j = getRandomInt(n);
    // Swap arr[i] and arr[j]
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // Convert Array to string
  const anagramInsult = arr.join("");
  if (anagramInsult !== insult.slang) {
    return anagramInsult;
  }
  // no need for else as return ends scrambledInsult function
  return scrambledInsult(insult);
}

// function to create empty anagram answer dashes
function emptyAnswer(insult) {
  return new Array(insult.slang.length).fill("-").join("");
}
// function to add players letter to answer dash
function TauntGame({ insult, input, gameOver, setGameOver }) {
  // eslint-disable-next-line no-unused-vars
  const [anagram, setAnagram] = useState(scrambledInsult(insult));
  const [answer, setAnswer] = useState(emptyAnswer(insult));
  const [endMessage, setEndMessage] = useState("");

  useEffect(() => {
    //  If game is not over, make input appear in empty answer here using setAnswer add logic to stop extra chars.
    if (gameOver) return;
    if (input.length <= answer.length) {
      const latestInputLetter = input[input.length - 1];
      const answerArray = answer.split("");
      answerArray[input.length - 1] = latestInputLetter;
      const newAnswer = answerArray.join("");
      setAnswer(newAnswer);
    }
    // add a win/lose condition change GameOver state to false

    if (!answer.includes("-")) {
      if (answer === insult.slang.toUpperCase()) {
        setEndMessage("YOU WIN!");
      } else {
        setEndMessage("YOU SUCK!");
      }
      setGameOver(true);
    }
  }, [input, answer, insult.slang, setGameOver, gameOver]);

  return (
    <div className="tauntgame">
      {gameOver ? (
        <EndMessage endMessage={endMessage} insult={insult} />
      ) : (
        <>
          <h2>{anagram.toUpperCase()}</h2>
          <h2>{answer}</h2>
        </>
      )}
    </div>
  );
}

export default TauntGame;
