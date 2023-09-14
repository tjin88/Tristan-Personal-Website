import React from 'react';
import './Projects.css';
import { ProjectsData } from './ProjectsData';

const Projects = (props) => {
  return (
    <section id="Projects" className={`projects ${props.colour ? "colourBackground fadeIn2" : "blackWhiteBackground fadeIn"} ${props.sidebar ? "active" : ""}`}>
      <h1 className={`sectionTitle ${props.colour ? "blackText" : "whiteText"}`}>Projects</h1>
      <ul>
        {ProjectsData.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;
