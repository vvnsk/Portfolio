import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactGA from "react-ga";

function App() {
  initializeReactGA();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function initializeReactGA() {
  ReactGA.initialize("UA-104321386-1");
  ReactGA.pageview("/homepage");
}

export default App;
