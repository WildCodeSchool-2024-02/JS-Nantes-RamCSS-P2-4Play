import { useEffect, useState } from "react";
import KeyboardContainer from "../keyboard/KeyboardContainer";

function Motif() {
  const [solution, setSolution] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/florine-vnt/words-api/coiffeurs")
      .then((response) => response.json())
      .then((data) => {
        // random int between 0 & 29 
        const randomSolution = data[Math.floor(Math.random() * data.length)];
        setSolution(randomSolution.nom);
      });
  }, [setSolution]);

  return (
    <>
      <h1>Salut c'est moi Motif</h1>
      {solution && <div>Solution is {solution}</div>}
      <KeyboardContainer input={input} setInput={setInput} />
    </>
  );
}

export default Motif;
