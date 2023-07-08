// import React from "react";
import { Link } from "react-router-dom";
import Transitions from "./Transition";

export default function Home() {
  return (
    <div className="home--container">
      <Transitions>
        <p className="hero--text">Experience the Journey of a lifetime</p>
        <div className="explore--container">
          <Link to={"/destinations"}>
            <button className="explore--button">Explore destinations</button>
          </Link>
        </div>
      </Transitions>
    </div>
  );
}
