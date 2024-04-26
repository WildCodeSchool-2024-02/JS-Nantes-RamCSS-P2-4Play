/* import { array } from "prop-types";

function HangcheeseWord() {
  const word = "fromage";
  // const word = fromage.fromage
  // console.log(word)
  const guessedLetters = ["f", "m", "g", "e"];



  return (
    <div
      style={{
        display: "flex",
        gap: "0.25",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      <h2>{array}</h2>
      {word.split("").map((letter, index) => (
        <span
          style={{
            borderBottom: ".1em solid black",
            marginRight: "0.2em",
          }}
          key={index}
        >
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
export default HangcheeseWord;

*/
