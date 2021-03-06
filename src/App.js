import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import Routes from "./components/Routes";
import "./styles/layout.scss";
import "./styles/reset.scss";
import Topbar from "./components/topbar/topbar";
import Footer from "./components/footer/Footer";


export default function App() {
  return (
    <Router>
      <Topbar />
      <div className="column">
        <Routes />
      </div>
      <div>
        <Footer />
      </div>  
    </Router >
  );
}

