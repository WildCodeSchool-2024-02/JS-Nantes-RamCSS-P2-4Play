import { useState, useEffect } from "react";
import "./motif.css";
import ColorLegend from "./ColorLegend";
import MotifGame from "./MotifGame";
import KeyboardContainer from "../keyboard/KeyboardContainer";

function Motif() {
  const [solution, setSolution] = useState("");
  const [input, setInput] = useState("");
  const [feedbackColors, setFeedbackColors] = useState(Array(10).fill(""));
  // console.log(input);

  // gereration of array with 10 empty elements
  const rowTemp = [];
  for (let i = 0; i < 10; i += 1) {
    rowTemp.push("");
  }
  const [row, setRow] = useState(rowTemp);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/florine-vnt/words-api/coiffeurs-10"
    )
      .then((response) => response.json())
      .then((data) => {
        // random a number between 0 & 29 (size of the array)
        const randomSolution = data[Math.floor(Math.random() * data.length)];
        setSolution(randomSolution.nom);
        // console.log(randomSolution.nom);
      });
  }, [setSolution]);

  useEffect(() => {
    for (let i = 0; i < 10; i += 1) {
      setRow((prevValue) => {
        const copy = [...prevValue];
        copy.splice(i, 1, input[i]);
        return copy;
      });
    }
  }, [input]);

  // use colors to determine if letter is at the right place, or in the word, or isn't included
  useEffect(() => {
    const inputArray = input.split("");
    const solutionArray = solution.split("");
    if (inputArray.length === 10) {
      const newFeedbackColors = inputArray.map((letter, index) => {
        if (letter === solutionArray[index]) {
          return "#2cbfe2";
        } if (solutionArray.includes(letter)) {
          return "#ffb703";
        }
          return "white";
      });

      setFeedbackColors(newFeedbackColors);
    }
  }, [input, solution]);

  // const historicArray = [];

  return (
    <section className="motif-game">
      <header>
        <h3>Mo'tif</h3>
        <img src="./src/assets/images/thierry.png" alt="Thierry Beccaro" />
      </header>
      <div className="grille-jeux">
       {/* historicArray.length > 0 ?  */}
        {/* next step : si historic.length existe alors on rend la div historic + on map une nouvelle row */}
        {row.map((el, index) => (
          <div key={(Math.random() * 1000)} style={{ backgroundColor: feedbackColors[index] }}>
            {el}
          </div>
        ))}
      </div>
      <ColorLegend />
      <MotifGame solution={solution} />
      <KeyboardContainer input={input} setInput={setInput} limit={10} />
    </section>
  );
}

export default Motif;
