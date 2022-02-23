import React, { useState } from 'react';
import './Extracurriculars.css';
import Moon from '../Assets/Moon.png';
import Sun from '../Assets/Sun.png';
import EWB_Logo from '../Assets/EWB_Logo.png';
import GDSC_Western from '../Assets/GDSC_Western.png';
import MCap_Logo from '../Assets/MCap_Logo.jpeg';
import WECCA_Logo from '../Assets/WECCA_Logo.png';

function Extracurriculars() {
  //if colour mode on, this is true. If black/white version, set this to false
  const [colour, setColour] = useState(true);

  return (
    <div className={`Extracurriculars ${colour ? "colour" : "blackWhite"}`}>
      <div className = "background">
        {/* **Still need to make this button invisible**  */}
        <button className = "button" onClick={() => setColour(!colour)}>
          <img className = "sunMoon" src = {colour ? Moon : Sun} alt = "Moon"/>
        </button>

        <button className="menu" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path class="line line2" d="M 20,50 H 80" />
            <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>

        <h2 className="title">
            Extracurriculars
        </h2>
        <section className="body">
            <section className="part">
                <p className="text">Political Advocacy Director - Engineers Without Borders, April 2021 - Present</p>
                <img className = "image right" src = {EWB_Logo} alt = "Western logo"/>
            </section>
            <section className="part">
                <img className = "image" src = {GDSC_Western} alt = "Cobourg logo"/>
                <p className="text right">Educationals Director - Google Developer Student Club, September 2021 - Present</p>
            </section>
            <section className="part">
                <p className="text">Analyst - Mustang Capital, September 2021 - Present</p>
                <img className = "image right" src = {MCap_Logo} alt = "LA Marathon logo"/>
            </section>
            <section className="part">
                <img className = "image" src = {WECCA_Logo} alt = "Cobourg logo"/>
                <p className="text right">Member - Western Engineering Concrete Canoe Association, September 2020 - Present</p>
            </section>
        </section>
      </div>
    </div>
  );
}

export default Extracurriculars;
