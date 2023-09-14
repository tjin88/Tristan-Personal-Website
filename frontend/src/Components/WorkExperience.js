import React from 'react';
import './WorkExperience.css';
import TauriaDark from '../Assets/Tauria_Logo_Dark.png';
import TauriaWhite from '../Assets/Tauria_Logo_White.png';
import Qualcomm from '../Assets/Qualcomm_Logo.svg';

const WorkExperience = (props) => {
  return (
    <section id="WorkExperience" className = {`workExperience ${props.colour ? "colourBackground fadeIn2" : "blackWhiteBackground fadeIn"} ${props.sidebar ? "active" : ""}`}>
        <h1 className = {`sectionTitle ${props.colour ? "blackText" : "whiteText"}`}>Work Experience</h1>
        <p className={`workText leftWork ${props.colour ? "blackText" : "whiteText"}`}>Qualcomm - Machine Learning Team</p>
        <img className = "rightWork qualcommLogo" src = {Qualcomm} alt = "Qualcomm logo"/>
        <div className="clearPart"></div>
        <p className={`workText leftWork ${props.colour ? "blackText" : "whiteText"}`}>Tauria - Frontend Development Team</p>
        <img className = {`rightWork ${props.colour ? "tauriaLogoDark" : "tauriaLogoWhite"}`} src = {props.colour ? TauriaDark : TauriaWhite} alt = "Tauria logo"/>
        <div className="clearPart"></div>
    </section>
  );
};

export default WorkExperience;
