// import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageSwitch from "./components/PageSwitch";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <PageSwitch />
        <Footer />
      </Router>
    </div>
  );
}
