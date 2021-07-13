import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaEnvelope, FaBook} from "react-icons/fa";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <IconContext.Provider value = {{ color:"cornflowerblue", size: "1em"}}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <div>
          <FaBook />
        </div>
        
        <div>
          <FaEnvelope transform="rotate(180)"/>
        </div>

        <div>
          <FaEnvelope />
        </div>

        <div>
          <FaGithub />
        </div>

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
    </IconContext.Provider>
  );
}

export default App;
