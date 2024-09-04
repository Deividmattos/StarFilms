import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        Star Flix
      </Link>
      <Link className="favoritos" to="/favoritos">
        My Movie
      </Link>
    </header>
  );
}
export default Header;
