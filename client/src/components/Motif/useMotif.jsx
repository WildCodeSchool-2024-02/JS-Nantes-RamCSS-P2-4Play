// import { useState } from "react";

// function useMotif(solution) {
//   const [turn, setTurn] = useState(0);
//   const [currentGuess, setCurrentGuess] = useState("");
//   const [guesses, setGuesses] = useState([...Array(6)]); // guess is an array
//   const [history, setHistory] = useState([]); // guess is a string
//   const [isCorrect, setIsCorrect] = useState(false);

//   // track current guess.
//   // if user presses delete, delete the last letter.
//   // if user presses enter, add the new guess.
//   function handleKeyup({ key }) {
//     if (key === "{ent}") {
//       // only add guess if turn is less than 5
//       if (turn > 5) {
//         console.log("you used all your guesses !");
//         return;
//       }
//       // do not allow duplicate words
//       if (history.includes(currentGuess)) {
//         console.log("you already tried that word.");
//         return;
//       }
//       // check word is 10 chars
//       if (currentGuess.length !== 10) {
//         console.log("word must be 10 chars");
//         return;
//       }
//       const formatted = formatGuess();
//       addNewGuess(formatted);
//       console.log(formatted);
//     }

//     if (key === "backspace") {
//       setCurrentGuess((prev) => prev.slice(0, -1));
//       return;
//     }
//     if (/^[A-Za-z]$/.test(key)) {
//       if (currentGuess.length < 10) {
//         setCurrentGuess((prev) => prev + key);
//       }
//     }
//   }

//   // format a guess into an array of letter objects
//   function formatGuess() {
//     let solutionArray = [...solution];
//     let formattedGuess = [...currentGuess].map((element) => {
//       return { key: element, color: "white" };
//     });

//     //find any green letters
//     formattedGuess.forEach((element, i) => {
//       if (solution[i] === element.key) {
//         formattedGuess[i].color = "green";
//         solutionArray[i] = null;
//       }
//     });

//     //find any yellow letters
//     formattedGuess.forEach((element, i) => {
//       if (solutionArray.includes(element.key) && element.color !== "green") {
//         formatGuess[i].color = "yellow";
//         solutionArray[solutionArray.indexOf(element.key)] = null;
//       }
//     });

//     return formattedGuess;
//   }

//   // add a new guess to the guesses state
//   // isCorrect state if the guess is correct
//   // add one to the turn state
//   function addNewGuess(formattedGuess) {
//     if (currentGuess === solution) {
//       setIsCorrect(true);
//     }
//     setGuesses((prevGuesses) => {
//       let newGuesses = [...prevGuesses];
//       newGuesses[turn] = formattedGuess;
//       return newGuesses;
//     });
//     setHistory((prevHistory) => {
//       return [...prevHistory, currentGuess];
//     });
//     setTurn((prevTurn) => {
//       return prevTurn + 1;
//     });
//     setCurrentGuess("");
//   }

//   return turn, currentGuess, guesses, isCorrect, handleKeyup;
// }

// export default useMotif;

