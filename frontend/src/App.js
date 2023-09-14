import React, { useState } from 'react';
import './App.css';
import Moon from './Assets/Moon.png';
import Sun from './Assets/Sun.png';
import Home from './Components/Home';
import About from './Components/About';
import WorkExperience from './Components/WorkExperience';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Sidebar from './Components/Sidebar';

function App() {
  //if colour mode on, this is true. If black/white version, set this to false
  const [colour, setColour] = useState(true);
  const [sidebar, showSidebar] = useState(false);

  const changeBackgroundHiddenColor = (newColor) => {
    const elem = document.getElementById('rootBody');
    console.log(elem);
    // elem.style.background = `linear-gradient(${newColor} 0%, ${newColor} 50%, black 50%, black 100%)`; 
    elem.style.backgroundColor = newColor;
  }

  return (
    <div className="tristanWebsite">
      <Home colour={colour} sidebar={sidebar} showSidebar={showSidebar}/>
      <img 
        className = {`sunMoonHome ${colour ? "regularColour" : "invertColour"}`} 
        src = {colour ? Moon : Sun} 
        alt = "Sun/Moon icon" 
        onClick={() => {setColour(!colour); changeBackgroundHiddenColor(colour ? "#2B2C2E" : "#FAF8EE")}}
      />
      <Sidebar colour={colour} sidebar={sidebar} showSidebar={showSidebar}/>
      <About colour={colour} sidebar={sidebar}/>
      <WorkExperience colour={colour} sidebar={sidebar}/>
      <Education colour={colour} sidebar={sidebar}/>
      <Projects colour={colour} sidebar={sidebar}/>
      <Contact colour={colour} sidebar={sidebar}/>
    </div>
  );
}

export default App;
