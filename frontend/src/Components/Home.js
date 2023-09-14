import React from 'react';
import './Home.css';
import ManColour from '../Assets/ManColour.png';
import ManBlackWhite from '../Assets/ManBlackWhite.png';
import Resume from '../Assets/Resume.png'
import Github from '../Assets/Github.png'
import Linkedin from '../Assets/LinkedIn.png'
import Email from '../Assets/Email.png'
import BurgerMenu from '../Components/BurgerMenu';

const Home = (props) => {
  return (
    <div className={`Home ${props.colour ? "colourBackground fadeIn2" : "blackWhiteBackground fadeIn"}`} id = "Home">
      <BurgerMenu colour={props.colour} sidebar={props.sidebar} showSidebar={props.showSidebar}/>
      <div className = "intro">
        <div className = "introText">
          <img className = {`boyImage ${props.colour ? "regularColour" : "invertColour"}`} src = {props.colour ? ManColour : ManBlackWhite} alt = ""/>
          <h1 className = {`name ${props.colour ? "blackText" : "whiteText"}`}>Hi! I'm Tristan Jin</h1>
        </div>
        <div className = "contactMeIntro">
          <a className = "logoLinks" href="https://linkedin.ca/in/tristan-jin" target="_blank" rel="noopener noreferrer">
            <img className = {`introLogo outerLeft ${props.colour ? "regularColour" : "invertColour"}`} src = {Linkedin} alt = "LinkedIn Logo"/>
          </a>
          <a className = "logoLinks" href="https://github.com/tjin88/" target="_blank" rel="noopener noreferrer">
            <img className = {`introLogo middle ${props.colour ? "regularColour" : "invertColour"}`} src = {Github} alt = "Github Logo"/>
          </a>
          <a className = "logoLinks" href="mailto:tjin368@gmail.com" target="_blank" rel="noopener noreferrer">
            <img className = {`introLogo middle ${props.colour ? "regularColour" : "invertColour"}`} src = {Email} alt = "Email Logo"/>
          </a>
          <a className = "logoLinks" href="https://drive.google.com/file/d/1-6RqiUdoRNrCX9ZTSrHwicZ3mqupoOd-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img className = {`introLogo outerRight ${props.colour ? "regularColour" : "invertColour"}`} src = {Resume} alt = "Resume Logo"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
