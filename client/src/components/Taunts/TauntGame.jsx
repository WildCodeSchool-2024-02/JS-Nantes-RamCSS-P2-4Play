import { useState, useEffect } from "react";
import EndMessage from "./EndMessage";

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
function scrambledInsult(insult) {
  const arr = insult.slang.split(""); // Convert String to array
  const n = arr.length; // Length of the array

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < n - 1; i++) {
    const j = getRandomInt(n); // Get random of [0, n-1]

    const temp = arr[i]; // Swap arr[i] and arr[j]
    arr[i] = arr[j];
    arr[j] = temp;
  }

  const anagramInsult = arr.join(""); // Convert Array to string
  if (anagramInsult !== insult.slang) {
    return anagramInsult;
  }
  // no need for else as return ends scrambledInsult function
  return scrambledInsult(insult);
}

function emptyAnswer(insult) {
  //   const length = insult.slang.length;
  //   const arr = new Array(length).fill("-").join();
  //     return arr;

  return new Array(insult.slang.length).fill("-").join("");
}
function TauntGame({ insult, input, gameOver, setGameOver }) {
  // eslint-disable-next-line no-unused-vars
  const [anagram, setAnagram] = useState(scrambledInsult(insult));

  const [answer, setAnswer] = useState(emptyAnswer(insult));
  const [endMessage, setEndMessage] = useState("");

  useEffect(() => {
    //  make input appear in empty answer here using setAnswer add logic to stop extra chars.
    if (input.length <= answer.length) {
      const latestInputLetter = input[input.length - 1];
      const answerArray = answer.split("");
      answerArray[input.length - 1] = latestInputLetter;
      const newAnswer = answerArray.join("");
      setAnswer(newAnswer);
    }
    // add a win/lose condition

    if (!answer.includes("-")) {
      if (answer === insult.slang.toUpperCase()) {
        setEndMessage("YOU WIN!");
      } else {
        setEndMessage("YOU SUCK!");
      }
      setGameOver(true);
    }
  }, [input, answer, insult.slang, setGameOver]);

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
//  react confetti boom
// TODO add in two modals - one win, one lose
// win - affiche two defns deblock timed confetti
// lose - affiche meassage saying that you're crap
//  add a timer to restart the game once over,
// fetch the next word.
