import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import WorkExperience from './Pages/WorkExperience';
import Extracurriculars from './Pages/Extracurriculars';


ReactDOM.render(
  // <React.StrictMode>
  //   <Home />
  // </React.StrictMode>,
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/WorkExperience" element={<WorkExperience />} />
      <Route path="/Extracurriculars" element={<Extracurriculars />} />
    </Routes>
    {/* <Footer /> */}
  </Router>,
  document.getElementById('root')
);
