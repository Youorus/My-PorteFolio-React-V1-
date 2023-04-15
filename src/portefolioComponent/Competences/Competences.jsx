import React from "react";
import Cards from "./Cards";
import items from "./constantes";
import "./Competence.css";

const Competences = () => {
  return (
    <div>
      <div className="card-items">
      <div className="item-card">
      {items.map((item, i) => {
            return(<Cards color={item.color} key={item.i} img={item.imgUrl} title={item.title} text={item.text} val={item.pourcentage} />)   
        })}
      </div>
        
      </div>
    </div>
  );
};

export default Competences;
