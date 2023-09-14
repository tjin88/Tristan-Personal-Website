import React from 'react'
import "./BurgerMenu.css";

const BurgerMenu = (props) => {
    return (
      <div className={`nav-icon ${props.colour ? "regularColour" : "invertColour"} ${props.sidebar ? "active" : ""}`} onClick={() => props.showSidebar(!props.sidebar)}>
          <div></div>
      </div>
    )
}

export default BurgerMenu
