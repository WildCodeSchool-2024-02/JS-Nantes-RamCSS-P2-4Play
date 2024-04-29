import Confetti from "react-confetti-boom";
import GameOver from "./GameOver";

function EndMessage({ endMessage }) {
  return (
    <div className="motif-endmessage">
      {endMessage === "YOU WIN" ? (
        <>
          <div>
            TA PERFORMANCE EST EBOURRIFANTE TA VICTOIRE EST PERMANENTE BRAVO TU
            AS DEMELE CETTE ENIGME AVEC SUCCES TU AS COIFFE CETTE VICTOIRE AVEC
            ELEGANCE BRAVO TU AS COUPE COURT A LA COMPETITION{" "}
          </div>
          {/*  react confetti explosion */}
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

      <a href="http://localhost:3000/motif">
        <button className="motifbutton" type="button">
          RESET!
        </button>
      </a>
    </div>
  );
}

export default EndMessage;
