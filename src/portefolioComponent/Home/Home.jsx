import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import { useState, useEffect } from "react";
import logo2 from "./logo2.png"


const Home = () => {


  const [color, setColor] = useState('black');

  const changeColor = () => {
    setInterval(1000)
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    setColor(randomColor);
  }
  useEffect(() => {
    const intervalId = setInterval(changeColor, 2000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="left-section">
    <div className="boxText" >
      <h1 style={{ color: color }} className="random-color-text" >HI, MY NAME IS MARC</h1>
      <div className="textanimate">
        <h2>I am Web Developer and I use many technologies like :  &nbsp;&nbsp;</h2>
        <span ><Typewriter
            options={{
              strings: ["HTML", "CSS","JAVASCRIPT", "BOOTSTRAP", "REACT","JAVA", "NODE JS"],
              autoStart: true,
              loop: true,
            }}
          /></span>
      </div>
      </div>
      <div className="imagehome">
      <img src={logo2}/>
      </div>
    </div>
  );
};

export default Home;
