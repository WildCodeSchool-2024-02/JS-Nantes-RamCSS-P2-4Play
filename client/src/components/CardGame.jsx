import "./cardGame.css";

function CardGame({ gameItems }) {
  // ! Add a better alt description
  return (
    <figure className="imgContainer">
      <img src={gameItems.image} alt="to_defined" />
      <figcaption>
        <h2>{gameItems.title}</h2>
        <p>{gameItems.description}</p>
      </figcaption>
    </figure>
  );
}

export default CardGame;
