import './App.css';
import React from 'react'
import { Feedback } from './components/Feedback'
import {Intro} from "./components/Intro";
import {About} from "./components/About";
import {Record} from "./components/Program";
import {TestMargin} from "./UI/TESTMARGIN/TESTMARGIN";


function App() {
  return (
    <div className="App">
         {/*<TestMargin>*/}
        <Intro />

        <About />

        <Record />
        {/*</TestMargin>*/}


        {/*<Feedback />*/}
    </div>
  );
}

export default App;
