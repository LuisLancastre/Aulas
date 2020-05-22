import React from "react";
import logo from "../assets/images/logo.svg";
import "../styles/App.css";
import { Propriedades } from "./2 props/props";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Propriedades texto="ola do componente" cor="blue" />
      <Propriedades texto="ola do componente 2" cor="red" />
      <Propriedades texto="ola do componente 3" cor="pink" />
    </div>
  );
}

export default App;
