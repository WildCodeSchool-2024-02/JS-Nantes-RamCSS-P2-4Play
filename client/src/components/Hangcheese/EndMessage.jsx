import Confetti from "react-confetti-boom";
import GameOver from "./GameOver";
import "./endmessage.css";

function EndMessage({ endMessage, solution }) {
  return (
    <div className="motif-endmessage">
      {endMessage === "Bravo" ? (
        <>
          <div className="well-done-message">
            <p>Bravo t'es fort comme le Roquefort !</p>
          </div>
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
        <div className="motif-gameover">
          <GameOver />
        </div>
      )}

      <div className="motif-solution">La solution était {solution}</div>
      <a href={`${import.meta.env.VITE_API_URL}/hangcheese`}>
        <button className="motif-button" type="button">
          RESET
        </button>
      </a>
    </div>
  );
}

export default EndMessage;
