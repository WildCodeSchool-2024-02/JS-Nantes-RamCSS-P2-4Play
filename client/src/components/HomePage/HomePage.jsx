import CardGame from "./CardGame";
import "./home-page.css";

function HomePage({ gameItems }) {
  return (
    <>
      {/* render a CardGame component to each element of the props array */}
      <ul>
        {/* <Link to=""> */}
        {gameItems.map((item) => (
          <CardGame key={item.title} gameItems={item} />
        ))}
        {/* </Link> */}
      </ul>
    </>
  );
}

export default HomePage;