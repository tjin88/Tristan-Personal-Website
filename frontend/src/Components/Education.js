import React from 'react';
import './Education.css';
// import Western from "../Assets/Western.png";
import Western_White from "../Assets/Western_White.png";
import Ivey_Logo from "../Assets/Ivey_Logo.png";

const Education = (props) => {
  return (
    <section id="Education" className={`eduction ${props.colour ? "colourBackground fadeIn2" : "blackWhiteBackground fadeIn"} ${props.sidebar ? "active" : ""}`}>
      <h1 className={`sectionTitle ${props.colour ? "blackText" : "whiteText"}`}>Education</h1>
      <div className="education-container">
        <div className="education-item">
          <div className="education-logo">
            <img src={Western_White} alt="Western University Logo" />
          </div>
          <div className="education-info">
            <h3>Western University</h3>
            <ul>
              <li>Bachelor of Engineering Science (BESc), Software Engineering</li>
              <li>Expected graduation date: May 2025</li>
              <li>Relevant coursework: Data Structures and Algorithms, Operating Systems, Database Systems</li>
              <li>Extracurricular activities: Maple Hacks (Hackathon) Mentor (2023), Engineers Without Borders Director (2020-2022)
                Google Developer Student Club Director (2021-2022)</li>
            </ul>
          </div>
        </div>
        <div className="education-item">
          <div className="education-logo">
            <img src={Ivey_Logo} alt="Ivey Business School Logo" />
          </div>
          <div className="education-info">
            <h3>Ivey Business School</h3>
            <ul>
              <li>Honours Business Administration (HBA) at the Ivey Business School</li>
              <li>Expected graduation date: May 2025</li>
              <li>Relevant coursework: Financial Accounting, Marketing, Business Analytics</li>
              <li>Extracurricular activities: Mustang Capital Quant Arbitrage (2021 - Present), 
                Orientation Week Leader (2023 - Present)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
