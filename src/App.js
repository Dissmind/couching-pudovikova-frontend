import logo from './logo.svg';
import './App.css';
// import About from '.src/about/about'

import About from "./components/About/about";
import React from 'react'
import { Feedback } from './components/Feedback'

function App() {
  return (
    <div className="App">
      <About />
      <Feedback />
    </div>
  );
}

export default App;
