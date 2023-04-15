import React from 'react';

import Home from './portefolioComponent/Home/Home';
import './App.css';
import Navbar from './portefolioComponent/Navbar/Navbar';
import About from './portefolioComponent/About/About';
import Competences from './portefolioComponent/Competences/Competences';
import Passions from './portefolioComponent/Passions/Passions';
import Projet from "./portefolioComponent/projet/Projet"
import Contact from './portefolioComponent/contactMe/Contact';
import Footer from './portefolioComponent/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Competences/>
      <Passions/>
      <Projet/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
