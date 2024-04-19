import "./hangcheese.css";

const pieceofCheese = <div className="pieceofCheese" />;

function HangcheeseDrawing() {
  return (
    <div className="cheeseDrawing">
      {pieceofCheese}
      <div className="cheesePendu4" />
      <div className="cheesePendu3" />
      <div className="cheesePendu1" />
      <div className="cheesePendu" />
    </div>
  );
}
export default HangcheeseDrawing;
