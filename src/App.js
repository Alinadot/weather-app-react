import React from "react";
import Weather from "./Weather"; 
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
   
   <Weather />
    <footer>
      This project is coded by Alina Shamko and is{" "}
  <a href="https://github.com/Alinadot/weather-app-react"target="_blank" rel="noreferrer">open-sourced on GitHub</a>
    
    </footer>
    </div>
    </div>
  );
}

