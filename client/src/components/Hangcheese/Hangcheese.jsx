import { useState } from "react";
import KeyboardContainer from "../keyboard/KeyboardContainer";
import HangcheeseAnime from "./HangcheeseAnime";
import "./hangcheese.css";





function HangCheese() {

     const [input, setInput] = useState("");
     return (
          <div>
               <h1>Le fameux et excellent jeu du fromage pendu !</h1>
               <KeyboardContainer input={input} setInput={setInput} />
               <HangcheeseAnime />
          </div>
     );

}

export default HangCheese;



