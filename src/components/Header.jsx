// import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header--title">
        <a href="/">
          <p>Space Tourism</p>
        </a>
      </div>

      <div className="nav--container">
        <a className="nav--item" href="/">
          Home
        </a>
        <a className="nav--item" href="/destinations">
          Destinations
        </a>
        <a className="nav--item" href="/about">
          About us
        </a>
      </div>
    </header>
  );
}
