import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
  const path = useLocation().pathname;
  let headerStyle = {
    backgroundColor: path === "/" ? "transparent" : "rgb(8, 18, 23)",
  };

  return (
    <header style={headerStyle}>
      <div className="header--title">
        <img src={logo} className="header--logo" alt=""></img>
        <Link to="/">
          <p>Space Trek</p>
        </Link>
      </div>

      <div className="nav--container">
        <Link className="nav--item" to="/">
          Home
        </Link>
        <Link className="nav--item" to="/destinations">
          Destinations
        </Link>
        <Link className="nav--item" to="/about">
          About us
        </Link>
      </div>
    </header>
  );
}
