import { useState } from "react"; // rajuter useEffect
import KeyboardContainer from "../keyboard/KeyboardContainer";
import "./motif.css";
// import MotifGame from "./MotifGame";

function Motif() {
  // const [solution, setSolution] = useState("");
  const [input, setInput] = useState("");

  // useEffect(() => {
  //   fetch(
  //     "https://my-json-server.typicode.com/florine-vnt/words-api/coiffeurs-10"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       random a number between 0 & 29 (size of the array)
  //       const randomSolution = data[Math.floor(Math.random() * data.length)];
  //       setSolution(randomSolution.nom);
  //       console.log(randomSolution.nom);
  //     });
  // }, [setSolution]);

  return (
    <section className="motif-game">
      <header>
        <h3>Mo'tif</h3>
        <img src="./src/assets/images/thierry.png" alt="Thierry Beccaro" />
      </header>
      <div className="grille-jeux">
        <div className="first-letter">L</div>
        <div>.</div>
        <div>.</div>
        <div>I</div>
        <div>.</div>
        <div>.</div>
        <div>H</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
      {/* {solution && <MotifGame solution={solution} />} */}
      <KeyboardContainer input={input} setInput={setInput} />
    </section>
  );
}

export default Motif
