import "./hangcheese.css";
// import { useState } from "react";

// const pieceofCheese = <div className="pieceofCheese" />;

function HangcheeseDrawing({ remainingAttempts }) {
  return (
    <div className="pendu-container">
      <div className="cheeseDrawing">
        {remainingAttempts < 1 && <div className="pieceofCheese" />}
        {remainingAttempts < 2 && <div className="corde" />}
        {remainingAttempts < 3 && <div className="largeur-potence" />}
        {remainingAttempts < 4 && <div className="hauteur-potence" />}
        {remainingAttempts < 5 && <div className="pied-potence" />}
      </div>
    </div>
  );
}
export default HangcheeseDrawing;
