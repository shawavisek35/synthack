import React from "react";
import './assets/App.css';
import Navbar from './components/navbar.js'
import Timeline from "./components/timeline";

function App() {
  return (
    <div className="App">
      <header><Navbar/></header>
      <main>
        <Timeline />
      </main>
      <footer>This is footer</footer>
    </div>
  );
}

export default App;
