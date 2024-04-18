import { useEffect, useState } from "react";
import KeyboardContainer from "../keyboard/KeyboardContainer";
import "./motif.css"

function Motif() {
  const [solution, setSolution] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/florine-vnt/words-api/coiffeurs")
      .then((response) => response.json())
      .then((data) => {
        // random a number between 0 & 29 (size of the array) 
        const randomSolution = data[Math.floor(Math.random() * data.length)];
        setSolution(randomSolution.nom);
      });
  }, [setSolution]);

  return (
    <section className="motif-game">
      <header>
      <h1>Mo'tif</h1>
      <img src="./src/assets/images/thierry.png" alt="Thierry Beccaro" />
      </header>
      {solution && <div>Solution is {solution}</div>}
      <KeyboardContainer input={input} setInput={setInput} />
    </section>
  );
}

export default Motif;
