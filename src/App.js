import './App.css';
import React from 'react'
import { Feedback } from './components/Feedback'
import {Intro} from "./components/Intro";
import {About} from "./components/About";


function App() {
  return (
    <div className="App">

        <Intro />

        <About />

        <Feedback />
    </div>
  );
}

export default App;
