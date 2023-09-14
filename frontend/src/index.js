import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from './Pages/Home';
import Manga from './Pages/Manga';
import LightNovels from './Pages/LightNovels';
import Footer from './Components/Footer';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Manga" element={<Manga />} />
      <Route path="/LightNovels" element={<LightNovels />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);
