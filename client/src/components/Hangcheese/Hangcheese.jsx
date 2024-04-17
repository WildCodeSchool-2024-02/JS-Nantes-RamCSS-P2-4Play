import { useState, useEffect } from "react";
import KeyboardContainer from "../keyboard/KeyboardContainer";


function HangCheese() {
     const [input, setInput] = useState("");
     return (
          <div>
               <h1>Le fameux jeu du fromage pendu !</h1>
               { /*<KeyboardContainer input={input} setInput={setInput} /> */}
          </div>
     );

}

export default HangCheese;

