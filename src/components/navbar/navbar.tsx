import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navBar">
      <div className="name">
        <Link to="/">Name</Link>
      </div>
      <div className="favourites">
        <Link to="/favourites">Favourite</Link>
      </div>
      <div className="fact">
        <Link to="/cart">Cat Fact</Link>
      </div>
    </div>
  );
}
