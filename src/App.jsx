// import React from "react";
// import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageSwitch from "./components/PageSwitch";

export default function App() {
  return (
    <div>
      <Header />
      <PageSwitch />
      <Footer />
    </div>
  );
}
