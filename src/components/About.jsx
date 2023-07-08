// import React from "react";
import { Link } from "react-router-dom";
import Transitions from "./Transition";

export default function About() {
  return (
    <div className="about--container">
      <Transitions>
        <div className="about--content">
          <div className="about--text">
            Space Trek is a company funded by you, the people of Earth.
            <br />
            We strive to provide services at accessible prices.
            <br />
            Space tours are no longer restricted to wealthy/upper class people.
            <br />
            From inexpensive Lunar tour to beathtaking views of Rings of Saturn,
            we got it all.
            <br />
            So, what are you waiting for? Go ahead and explore our destinations
            to EXPERIENCE THE JOURNEY OF A LIFETIME!
          </div>
          <div className="explore--container">
            <Link to={"/destinations"}>
              <button className="explore--button">Explore destinations</button>
            </Link>
          </div>
        </div>
      </Transitions>
    </div>
  );
}
