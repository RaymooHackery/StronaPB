import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import Navbar from "./components/navbar/Navbar";
import Routes from "./components/Routes";
import "./styles/layout.scss";
import "./styles/reset.scss";
import Contact from "./components/contact/contact";

export default function App() {
  return (
    <Router>
      <div className="row">
        <div className="column">
          <Contact />
        </div>
        <div className="column">
          <Navbar />
          <Routes />
        </div>
      </div>
    </Router >
  );
}

