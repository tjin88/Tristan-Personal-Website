import React from 'react';
import './Sidebar.css';
import { SidebarData } from './SidebarData';
import { Link, animateScroll as scroll } from "react-scroll";

const Sidebar = (props) => {
  return (
    <div className={`${props.sidebar ? "sidebar active" : "sidebar"} ${props.colour ? "colourSidebar" : "blackWhiteSidebar"}`}>
    <ul className={`${props.sidebar ? "sidebarList active" : "sidebarList"}`}>
        {SidebarData.map((item, index) => {
        return (
            <li key={index} className={`${item.className}`}>
            <Link 
                to={item.path}
                smooth={true}
                duration={1500}
                offset={-75}
                onClick={() => props.showSidebar(!props.sidebar)}
            > 
                {/* ICON WOULD GO HERE */}
                <span className={`${props.colour ? "blackText" : "whiteText"}`}>{item.title}</span>
            </Link>
            </li>
        )
        })}
    </ul>
    </div>
  );
}

export default Sidebar;
