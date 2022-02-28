import React, { useState } from 'react';
import './About.css';
import Moon from '../Assets/Moon.png';
import Sun from '../Assets/Sun.png';
import Western from '../Assets/Western.png';
import Cobourg from '../Assets/Cobourg2.png';
import LA_Marathon from '../Assets/LA_Marathon.png';

function About() {
  //if colour mode on, this is true. If black/white version, set this to false
  const [colour, setColour] = useState(true);

  return (
    <div className={`About ${colour ? "colour" : "blackWhite"}`}>
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
            About Me
        </h2>
        <section className="body">
            <section className="part">
                <p className="text">My name is Tristan. I'm an engineering student at Western University specializing in software engineering.</p>
                <img className = "image" src = {Western} alt = "Western logo"/>
            </section>
            <section className="part">
                <img className = "image" src = {Cobourg} alt = "Cobourg logo"/>
                <p className="text">I am from Cobourg, Ontario - It's a small town, but our beach is known to be one of Ontario's best beaches. We have a ton of events each summer, and my favourite is definitely the Sandcastle Festival.</p>
            </section>
            <section className="part">
                <p className="text">If I were asked my proudest moment, it would be my journey to completing the LA Marathon. Ask me about it!</p>
                <img className = "image" src = {LA_Marathon} alt = "LA Marathon logo"/>
            </section>
        </section>
      </div>
    </div>
  );
}

export default About;
