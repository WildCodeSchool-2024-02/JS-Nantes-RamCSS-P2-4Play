import Confetti from "react-confetti-boom";
import GameOver from "./GameOver";

function EndMessage({ endMessage, insult }) {
  return (
    <>
      <div>{endMessage}</div>
      {endMessage === "You Win" ? (
        <div>
          MORE WIN{" "}
          <Confetti
            mode="fall"
            x={0.5}
            y={0.1}
            particleCount={50}
            deg={270}
            shapeSize={8}
            spreadDeg={45}
            effectInterval={2000}
            effectCount={3}
            colors={["#ff577f", "#ff884b", "#ffd384", "#fff9b0", "#3498db"]}
          />
        </div>
      ) : (
        <div>
          MORE LOSE <GameOver />
        </div>
      )}

      <div> {insult.slang}</div>
      <div>{insult.def_fr}</div>
      <div>{insult.def_en} </div>
    </>
  );
}

export default EndMessage;
// add conditional logic in
