import Confetti from "react-confetti-boom";
import GameOver from "./GameOver";

function EndMessage({ endMessage, insult }) {
  return (
    <>
      <div>{endMessage}</div>
      {endMessage === "You Win" ? (
        <div>
          YOU'RE SMARTER THAN YOU LOOK!{" "}
          <Confetti
            mode="fall"
            x={0.5}
            y={0}
            particleCount={500}
            deg={270}
            shapeSize={12}
            spreadDeg={45}
            effectInterval={10000}
            effectCount={1}
            colors={["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"]}
          />
        </div>
      ) : (
        <>
          <div>TRY AGAIN, DO BETTER</div>
          <div>
            <GameOver />
          </div>
        </>
      )}

      <div> {insult.slang}</div>
      <div>{insult.def_fr}</div>
      <div>{insult.def_en} </div>
    </>
  );
}

export default EndMessage;
// add conditional logic in
