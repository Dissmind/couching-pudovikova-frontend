import './App.css';
import React from 'react'
import {Intro} from "./components/Intro";
import {About} from "./components/About";
import {Program} from "./components/Program";
import {Record} from "./components/Record";
import {Footer} from "./components/Footer";
import {Feedback} from "./components/Feedback";
import {PopupFeedback} from "./components/Feedback/Popup/index.js";


function App() {
  return (
    <div className="App">

        <Intro />

        <About />

        <Program />

        <Feedback />

        <Record />

        <Footer />

        {/*<PopupFeedback />*/}
    </div>
  );
}

export default App;
