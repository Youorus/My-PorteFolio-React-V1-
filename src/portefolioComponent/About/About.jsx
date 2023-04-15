import React from 'react'
import "./About.css"
import { Download } from "react-bootstrap-icons";
import CV from "./CV.pdf"
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'


const About = () => {
  return (
    <div className='aboutme'>
    <div className="image-container">
    <img src={image2} alt="Image 1"/>
    <img src={ image1} alt="Image 2"/>
    <img src={image3 } alt="Image 3"/>
  </div>
  <div className='about'>
    <h2>About Me</h2>
    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
    <a href={CV} download="CV Marc Takoumba">Download CV</a> 
  </div>
  </div>
  )
}

export default About