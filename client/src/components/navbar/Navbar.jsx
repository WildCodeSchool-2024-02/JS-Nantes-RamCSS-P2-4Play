import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="Image2024-04-07at17.05.34.jpeg" alt="Logo" className="logo" />
      </Link>
    </div>
  );
}
