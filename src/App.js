import './App.css';

import Logo from "./components/Intro/Logo/Logo";
import MainTitle from "./components/Intro/MainTitle/MainTitle";
import HorizontalRule from "./components/Intro/HorizontalRule/HorizontalRule";
import LogoInstagram from "./components/Intro/LogoInstagram/LogoInstagram";
import PhoneNumber from "./components/Intro/PhoneNumber/PhoneNumber";
import Description from "./components/Intro/Description/Description";
import Image from "./components/Intro/Image/Image";

// Import Images
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import ButtonAppointment from "./components/Intro/ButtonAppointment/ButtonAppointment";
import Background from "./components/About/Background/Background";
import React from 'react'
import { Feedback } from './components/Feedback'
import {Intro} from "./components/Intro";
import About from "./components/About/about";

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
