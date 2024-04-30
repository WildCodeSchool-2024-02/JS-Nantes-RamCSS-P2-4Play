import { useState, useEffect } from "react";
import "./motif.css";
import ColorLegend from "./ColorLegend";
import KeyboardContainer from "../keyboard/KeyboardContainer";
import FourSquareSpinner from "../Spinner/FourSquareSpinner";
import EndMessage from "./EndMessage";

function Motif() {
  const [solution, setSolution] = useState("");
  const [input, setInput] = useState("");
  const [historicArray, setHistoricArray] = useState([]);
  const [attempt, setAttempt] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [endMessage, setEndMessage] = useState("");

  function getGameOverClass() {
    if (gameOver) return "motif-game-over";
    return "";
  }

  // gereration of array with 10 empty elements
  function generateEmptyArray() {
    const rowTemp = [];
    for (let i = 0; i < 10; i += 1) {
      rowTemp.push("");
    }
    return rowTemp;
  }
  const [row, setRow] = useState(generateEmptyArray());

  // fetching the API
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/florine-vnt/words-api/coiffeurs-10"
    )
      .then((response) => response.json())
      .then((data) => {
        // random a number between 0 & 29 (size of the array)
        const randomSolution = data[Math.floor(Math.random() * data.length)];
        setSolution(randomSolution.nom);
      });
  }, [setSolution]);

  // Function to count occurrences of each letter in a string
  function countLetterOccurrences(str) {
    return str.split("").reduce((counts, letter) => {
      const updatedCounts = { ...counts };
      updatedCounts[letter] = (updatedCounts[letter] || 0) + 1;
      return updatedCounts;
    }, {});
  }

  // Count occurrences of each letter in the solution
  const solutionLetterCounts = countLetterOccurrences(solution);

  // use colors to determine if letter is at the right place, or in the word, or isn't included
  const validationWordColors = (letter, index) => {
    const inputLetterCounts = countLetterOccurrences(input);

    if (solution[index] === letter) {
      return "#2cbfe2"; // blue color
    }
    if (
      solution.includes(letter) &&
      inputLetterCounts[letter] <= solutionLetterCounts[letter]
    ) {
      return "#ffb703"; // orange color
    }
    return "white";
  };

  // copy the input into the grid & check the colors once the row is complete
  useEffect(() => {
    if (gameOver) return;

    for (let i = 0; i < 10; i += 1) {
      setRow((prevValue) => {
        const copy = [...prevValue];
        copy.splice(i, 1, input[i]);
        return copy;
      });
    }

    if (input.length === 10 && attempt <= 5) {
      if (input !== solution) {
        const array = input.split("");
        const arrayLettersWithStatus = array.map((l, index) => ({
          lettre: l,
          status: validationWordColors(l, index),
        }));

        setHistoricArray((currentValue) => [
          ...currentValue,
          ...arrayLettersWithStatus,
        ]);
        setRow(generateEmptyArray());
        setInput("");
        setAttempt((prevCount) => prevCount + 1);
      } else {
        // check colors when solution = input
        const arrayLettersWithStatus = solution.split("").map((l, index) => ({
          lettre: l,
          status: validationWordColors(l, index),
        }));

        setHistoricArray((currentValue) => [
          ...currentValue,
          ...arrayLettersWithStatus,
        ]);
      }
    }

    // Win/Lose condition
    if (input.length === 10 && input === solution) {
      setTimeout(() => {
        setEndMessage("YOU WIN");
        setGameOver(true);
      }, 700);
    }

    if (input.length === 10 && attempt === 5 && input !== solution) {
      setTimeout(() => {
        setEndMessage("YOU LOSE");
        setGameOver(true);
      }, 700);
    }
  }, [input, attempt, solution, endMessage, gameOver]);

  // add the color generated to the status
  const generateColor = (el) => {
    if (el.status === "#2cbfe2") {
      return "#2cbfe2"; // blue color
    }
    if (el.status === "#ffb703") {
      return "#ffb703"; // orange color
    }
    return "white";
  };

  return (
    <section className="motif-game">
      <header>
        <h3>Mo'tif</h3>
        <img src="./src/assets/images/thierry.png" alt="Thierry Beccaro" />
      </header>
      {!solution ? (
        <FourSquareSpinner />
      ) : (
        <div>
          {gameOver ? (
            <EndMessage endMessage={endMessage} solution={solution} />
          ) : (
            <section className="grille-jeux">
              {historicArray.map((el) => (
                <div
                  key={Math.random() * 1000}
                  style={{
                    backgroundColor: generateColor(el),
                  }}
                >
                  {el.lettre}
                </div>
              ))}
              {input !== solution &&
                attempt <= 5 &&
                row.map((el) => <div key={Math.random() * 1000}>{el}</div>)}
            </section>
          )}
          <div className={getGameOverClass()}>
            <p className="text-attempt">Il te reste {6 - attempt} tentatives</p>
            <ColorLegend />
          </div>
        </div>
      )}
      <div className={getGameOverClass()}>
        <KeyboardContainer input={input} setInput={setInput} limit={10} />
      </div>
    </section>
  );
}

export default Motif;
