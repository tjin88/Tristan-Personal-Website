import React from 'react';
import './About.css';

const About = (props) => {
  return (
    <section id="AboutMe" className = {`aboutMe ${props.colour ? "colourBackground fadeIn2" : "blackWhiteBackground fadeIn"} ${props.sidebar ? "active" : ""}`}>
        <h1 className = {`sectionTitle ${props.colour ? "blackText" : "whiteText"}`}>ABOUT ME</h1>
        <p className = {`text ${props.colour ? "blackText" : "whiteText"}`}> 
            Based in Cobourg, Ontario, I'm currently studying my fouth year of software engineering and business at <a className = {`purpleLinks ${props.colour ? "blackText" : "whiteText"}`} href = "https://www.uwo.ca/" target="_blank" rel="noopener noreferrer">Western University</a>. 
            As a software developer, I hope to deliver unique products to make individual lives easier. 
            Currently, I'm seeking a Summer 2024 internship where I can continue to deliver this passion towards real-world experiences.
        </p>
        <p className = {`text ${props.colour ? "blackText" : "whiteText"}`}>
            Outside of work, you can find me playing tennis, running, or exploring new restaurants in town.
        </p>
        <p className = {`text ${props.colour ? "blackText" : "whiteText"}`}>
            Feel free to take a look at my <a className = {`purpleLinks ${props.colour ? "blackText" : "whiteText"}`} href="https://drive.google.com/file/d/1-6RqiUdoRNrCX9ZTSrHwicZ3mqupoOd-/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a>!
        </p>
    </section>
  );
};

export default About;
