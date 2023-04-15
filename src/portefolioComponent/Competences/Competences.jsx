import React from "react";
import Cards from "./Cards";
import items from "./constantes";
import "./Competence.css";

const Competences = () => {
  return (
    <div className="skills">
    <h2>Skills</h2>
      <div className="card-items">
      <div className="item-card">
      {items.map((item) => {
            return(<Cards color={item.color} key={item.id} img={item.imgUrl} title={item.title} text={item.text} val={item.pourcentage} />)   
        })}
      </div>
        
      </div>
    </div>
  );
};

export default Competences;
