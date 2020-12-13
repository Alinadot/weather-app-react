import React from "react";
import Weather from "./Weather"; 
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity="Amsterdam"/>
    <footer>
      <a href="https://github.com/Alinadot/weather-app-react" target="_blank" rel="noreferrer"> Open-sourced on GitHub {" "} </a>
      by Alina S
    </footer>
    </div>
    </div>
  );
}

