import './App.css';
import React from 'react'
import { Feedback } from './components/Feedback'
import {Intro} from "./components/Intro";
import {About} from "./components/About";
import {Program} from "./components/Program";
import {TestMargin} from "./UI/TESTMARGIN/TESTMARGIN";
import {Record} from "./components/Record";


function App() {
  return (
    <div className="App">
        <Intro />

        <About />

        <Program />

        {/*<Feedback />*/}

        <Record />


    </div>
  );
}

export default App;
