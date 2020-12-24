import './App.css';
import React from 'react'
import { Feedback } from './components/Feedback'
import {Intro} from "./components/Intro";
import {About} from "./components/About";
import {Program} from "./components/Program";
import {Record} from "./components/Record";
import {Footer} from "./components/Footer";


function App() {
  return (
    <div className="App">

        <Intro />

        <About />

        <Program />

        {/*<Feedback />*/}

        <Record />

        <Footer />
    </div>
  );
}

export default App;
