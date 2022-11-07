import React, { useState } from 'react';
import './Home.css';
import Moon from '../Assets/Moon.png';
import ManColour from '../Assets/ManColour.png';
import Sun from '../Assets/Sun.png';
import ManBlackWhite from '../Assets/ManBlackWhite.png';
import { SidebarData } from '../Components/SidebarData';
import Footer from '../Components/Footer';
import Instagram from '../Assets/Instagram.png'
import Github from '../Assets/Github.png'
import Linkedin from '../Assets/LinkedIn.png'
import Email from '../Assets/Email.png'
import Tauria from '../Assets/Tauria_Logo.png';
import Qualcomm from '../Assets/Qualcomm_Logo.svg';

function Home() {
  //if colour mode on, this is true. If black/white version, set this to false
  // const [colour, setColour] = useState("colour");   //either "colour" or "blackWhite"
  const [colour, setColour] = useState(true);
  const [sidebar, showSidebar] = useState(false);

  return (
    <>
      <div className={`Home ${colour ? "colourBackground fadeIn2" : "blackWhiteBackground fadeIn"}`} id = "Home">
        <div className={`nav-icon ${colour ? "" : "invertColour"} ${sidebar ? "active" : ""}`} onClick={() => showSidebar(!sidebar)}>
            <div></div>
        </div>
        <div className = "intro">
          <div className = "introText">
            <img className = {`boyImage ${colour ? "" : "invertColour"}`} src = {colour ? ManColour : ManBlackWhite} alt = ""/>
            <h1 className = {`name ${colour ? "blackText" : "whiteText"}`}>Hi! I'm Tristan Jin</h1>
          </div>
          <div className = "contactMeIntro">
            <a className = "logoLinks" href="https://linkedin.ca/in/tristan-jin" target="_blank" rel="noopener noreferrer">
              <img className = {`introLogo outerLeft ${colour ? "" : "invertColour"}`} src = {Linkedin} alt = "LinkedIn Logo"/>
            </a>
            <a className = "logoLinks" href="https://github.com/tjin88/" target="_blank" rel="noopener noreferrer">
              <img className = {`introLogo middle ${colour ? "" : "invertColour"}`} src = {Github} alt = "Github Logo"/>
            </a>
            <a className = "logoLinks" href="mailto:tjin368@gmail.com" target="_blank" rel="noopener noreferrer">
              <img className = {`introLogo middle ${colour ? "" : "invertColour"}`} src = {Email} alt = "Email Logo"/>
            </a>
            <a className = "logoLinks" href="https://linkedin.ca/in/tristan-jin" target="_blank" rel="noopener noreferrer">
              <img className = {`introLogo outerRight ${colour ? "" : "invertColour"}`} src = {Instagram} alt = "Instagram Logo"/>
            </a>
          </div>
        </div>
      </div>
      <img className = {`sunMoonHome ${colour ? "" : "invertColour"}`} src = {colour ? Moon : Sun} alt = "Moon" onClick={() => setColour(!colour)}/>
        <div className={`${sidebar ? "sidebar active" : "sidebar"} ${colour ? "colourSidebar" : "blackWhiteSidebar"}`}>
          {/* <div className={`nav-icon ${colour ? "" : "invertColour"} ${sidebar ? "active" : ""}`} onClick={() => showSidebar(!sidebar)}>
              <div></div>
          </div> */}
          <ul className={`${sidebar ? "sidebarList active" : "sidebarList"}`}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={`${item.className} ${colour ? "" : "invertColour"}`}>
                  <a href={item.path} onClick={() => showSidebar(!sidebar)}>
                    {/* ICON WOULD GO HERE */}
                    <span>{item.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>


      {/* <div className = {`sectionDivider ${colour ? "invertColour" : ""}`}></div> */}



      <div className = {`aboutMe ${colour ? "colourBackground fadeIn2" : "blackWhiteBackground fadeIn"} ${sidebar ? "active" : ""}`} id = "AboutMe">
        <h1 className = "sectionTitle">ABOUT ME</h1>
        <p className = {`text ${colour ? "blackText" : "whiteText"}`}> Based in the Cobourg, Ontario, I'm currently studying my third year of software engineering and business at <a className = "purpleLinks" href = "https://www.uwo.ca/" target="_blank" rel="noopener noreferrer">Western University</a>. 
        As a software developer, I hope to deliver unique products to make individual lives easier. 
        Currently, I'm seeking a Summer 2023 internship where I can continue to deliver this passion towards real-world experiences.</p>
        <p className = {`text ${colour ? "blackText" : "whiteText"}`}> Feel free to take a look at my <a className = "purpleLinks" href="https://drive.google.com/file/d/1-6RqiUdoRNrCX9ZTSrHwicZ3mqupoOd-/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a> or check out below some of the technologies I've worked with!</p>
      </div>

      <div className = {`workExperience ${colour ? "colourBackground fadeIn2" : "blackWhiteBackground fadeIn"} ${sidebar ? "active" : ""}`} id = "WorkExperience">
        <h1 className = "sectionTitle">Work Experience</h1>
        <p className="workText leftWork">Qualcomm - Machine Learning Team</p>
        <img className = "qualcommLogo rightWork" src = {Qualcomm} alt = "Qualcomm logo"/>
        {/* <p className="workText leftWork">Some explaination</p> */}
        <section className="part"></section>
        <img className = "tauriaLogo leftWork" src = {Tauria} alt = "Tauria logo"/>
        <p className="workText rightWork">Tauria - Frontend Development Team</p>
        {/* <p className="workText rightWork">Some explaination</p> */}
        <section className="part"></section>
      </div>

      <div className = {`interests ${colour ? "colourBackground fadeIn2" : "blackWhiteBackground fadeIn"} ${sidebar ? "active" : ""}`} id = "Interests">
        <h1 className = "sectionTitle">Interests</h1>
        <p className = {`text ${colour ? "blackText" : "whiteText"}`}>Running</p> 
        <p className = {`text ${colour ? "blackText" : "whiteText"}`}>Baking Cupcakes</p> 
      </div>

      <div className = {`contact ${colour ? "colourBackground fadeIn2" : "blackWhiteBackground fadeIn"} ${sidebar ? "active" : ""}`} id = "Contact">
        <h1 className = "sectionTitle">Get in Contact</h1>
        {/* <p className = {`text ${colour ? "blackText" : "whiteText"}`}>hello</p>  */}
        <a className = "logoLinks" href="https://linkedin.ca/in/tristan-jin" target="_blank" rel="noopener noreferrer">
          <img className = {`contactLogo outerLeft ${colour ? "" : "invertColour"}`} src = {Linkedin} alt = "LinkedIn Logo"/>
        </a>
        <a className = "logoLinks" href="https://github.com/tjin88/" target="_blank" rel="noopener noreferrer">
          <img className = {`contactLogo middle ${colour ? "" : "invertColour"}`} src = {Github} alt = "Github Logo"/>
        </a>
        <a className = "logoLinks" href="mailto:tjin368@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className = {`contactLogo middle ${colour ? "" : "invertColour"}`} src = {Email} alt = "Email Logo"/>
        </a>
        <a className = "logoLinks" href="https://linkedin.ca/in/tristan-jin" target="_blank" rel="noopener noreferrer">
          <img className = {`contactLogo outerRight ${colour ? "" : "invertColour"}`} src = {Instagram} alt = "Instagram Logo"/>
        </a>
      </div>

      <Footer/>
    </>
  );
}

export default Home;
