import Confetti from "react-confetti-boom";
import GameOver from "./GameOver";

function EndMessage({ endMessage, insult }) {
  return (
    <div className="endmessage">
      <div>{endMessage}</div>
      {endMessage === "YOU WIN!" ? (
        <>
          <div>YOU'RE SMARTER THAN YOU LOOK! </div>
          <Confetti
            mode="boom"
            x={0.5}
            y={0.2}
            particleCount={200}
            deg={270}
            shapeSize={18}
            spreadDeg={45}
            effectInterval={2000}
            effectCount={4}
            colors={["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"]}
          />
        </>
      ) : (
        <div className="gameover">
          <GameOver />
        </div>
      )}

      <div>{insult.slang}</div>
      <div>{insult.def_fr}</div>
      <div>{insult.def_en} </div>
      <a href="http://localhost:3000/taunts">
        <button className="tauntsbutton" type="button">
          RESET!
        </button>
      </a>
    </div>
  );
}

export default EndMessage;
// add conditional logic in
