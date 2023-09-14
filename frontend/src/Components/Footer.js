import React from 'react'
import "./Footer.css";
import Comic_Logo from "../Assets/Comic_Logo.png";
import Book_Logo from "../Assets/Book_Logo.png";

const Footer = (props) => {
    return (
        <div className = {`Footer ${props.sidebar ? "active" : ""}`}>
          <p className = "footerText">© Designed and Developed by Tristan Jin, 2022</p>
          <a className = "logoLinks" href="/manga" target="_blank" rel="noopener noreferrer">
            <img className = {`introLogo outerLeft invertColour`} src = {Comic_Logo} alt = "Manga Logo"/>
          </a>
          <a className = "logoLinks" href="/lightnovels" target="_blank" rel="noopener noreferrer">
            <img className = {`introLogo outerLeft invertColour`} src = {Book_Logo} alt = "Light Novels Logo"/>
          </a>
        </div>
    )
}

export default Footer
