/* import "./keyboard.css";

function HangcheeseKeyboard() {
  const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
        alignSelf: "stretch",
      }}
    >
      {KEYS.map((key) => {
        return (
          <button className="btn" key={key}>
            {key}
          </button> // affiche les boutons pour chaque lettre
        );
      })}
    </div>
  );
}

export default HangcheeseKeyboard;

*/
