import React from "react";
import logo from "../assets/images/logo.svg";
import "../styles/App.css";
import { Lista } from "./4 lists/lista";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Lista />
    </div>
  );
}

export default App;
