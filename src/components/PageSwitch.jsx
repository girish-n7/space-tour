// import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import About from "./About";
import Destinations from "./Destinations";
import Error from "./Error";

export default function PageSwitch() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/destinations"} element={<Destinations />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"*"} element={<Error />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

// Switch is replaced by Routes in react-router-dom
