import { useState } from "react";
import KeyboardContainer from "../keyboard/KeyboardContainer";

function Motif() {
  const [input, setInput] = useState("");
  return (
    <>
    <h1>Salut c'est moi Motif</h1>
   <KeyboardContainer input={input} setInput={setInput} />
    </>
  );
}

export default Motif;
