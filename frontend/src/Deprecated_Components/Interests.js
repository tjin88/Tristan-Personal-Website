import React from 'react';
import './Interests.css';

const Interests = (props) => {
  return (
    <section id="Interests" className = {`interests ${props.colour ? "colourBackground fadeIn2" : "blackWhiteBackground fadeIn"} ${props.sidebar ? "active" : ""}`}>
         <h1 className = "sectionTitle">Interests</h1>
        <p className = {`text ${props.colour ? "blackText" : "whiteText"}`}>Running (LA Marathon 2019, Chicago Marathon 2022)</p> 
        <p className = {`text ${props.colour ? "blackText" : "whiteText"}`}>Baking Cupcakes (Betty Crocker is under-rated)</p> 
        <p className = {`text ${props.colour ? "blackText" : "whiteText"}`}>Tennis Coaching (since 2017)</p> 
    </section>
  );
};

export default Interests;
