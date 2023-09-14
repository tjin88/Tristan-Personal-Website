import React from 'react';
import './Contact.css';
import Resume from '../Assets/Resume.png'
import Github from '../Assets/Github.png'
import Linkedin from '../Assets/LinkedIn.png'
import Email from '../Assets/Email.png'

const Contact = (props) => {
  return (
    <section id="Contact" className = {`contact ${props.colour ? "colourBackground fadeIn2" : "blackWhiteBackground fadeIn"} ${props.sidebar ? "active" : ""}`}>
        <h1 className = {`sectionTitle ${props.colour ? "blackText" : "whiteText"}`}>Get in Contact</h1>
        <a className = "logoLinks" href="https://linkedin.ca/in/tristan-jin" target="_blank" rel="noopener noreferrer">
          <img className = {`contactLogo outerLeft ${props.colour ? "regularColour" : "invertColour"}`} src = {Linkedin} alt = "LinkedIn Logo"/>
        </a>
        <a className = "logoLinks" href="https://github.com/tjin88/" target="_blank" rel="noopener noreferrer">
          <img className = {`contactLogo middle ${props.colour ? "regularColour" : "invertColour"}`} src = {Github} alt = "Github Logo"/>
        </a>
        <a className = "logoLinks" href="mailto:tjin368@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className = {`contactLogo middle ${props.colour ? "regularColour" : "invertColour"}`} src = {Email} alt = "Email Logo"/>
        </a>
        <a className = "logoLinks" href="https://drive.google.com/file/d/1-6RqiUdoRNrCX9ZTSrHwicZ3mqupoOd-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img className = {`contactLogo outerRight ${props.colour ? "regularColour" : "invertColour"}`} src = {Resume} alt = "Resume Logo"/>
        </a>
    </section>
  );
};

export default Contact;
