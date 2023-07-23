// import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Destinations from "./Destinations";
import Error from "./Error";

export default function PageSwitch() {
  return (
    <Routes key={location.pathname}>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/destinations"} element={<Destinations />}></Route>
      <Route path={"/about"} element={<About />}></Route>
      <Route path={"*"} element={<Error />}></Route>
    </Routes>
  );
}

// Switch is replaced by Routes in react-router-dom
