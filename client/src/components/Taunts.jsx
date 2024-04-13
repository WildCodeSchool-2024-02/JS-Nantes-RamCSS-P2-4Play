import { useState } from "react";
import KeyboardContainer from "./keyboard/KeyboardContainer";

function Taunts() {
  const [input, setInput] = useState("");
  return (
    <>
      <h1>Salut c'est moi Taunts</h1>
      <KeyboardContainer input={input} setInput={setInput} />
    </>
  );
}

export default Taunts;
