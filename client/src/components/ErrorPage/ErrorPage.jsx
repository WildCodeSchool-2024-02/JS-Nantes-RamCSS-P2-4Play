import Confetti from "react-confetti-boom";

import "./errorpage.css";

function ErrorPage() {
  return (
    <div className="errorpage">
      <h1> U DONE FUCKED IT UP!</h1>
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
    </div>
  );
}
export default ErrorPage;
