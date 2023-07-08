// import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header--title">
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
