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
    <p>As a student in "Business Informatics", I am passionate about the constantly evolving field of computer science and technology. My goal is to become an expert in web development, continually training and refining my professional skills.<br/><br/>

I have already gained significant experience in the computer science field through my studies and professional experiences. I have worked as a data entry clerk for various companies, which has allowed me to develop my accuracy and precision while strengthening my communication and teamwork skills.<br/><br/>

I am convinced that data science is the future of computer science, and I am constantly learning and training to be able to make meaningful contributions to this evolution. My aim is to become a professional who can tackle the most complex challenges in the field of data science, using my technical skills, creativity, and teamwork to achieve exceptional results.<br/><br/>

My portfolio reflects my journey and professional skills, and I am confident that it will attract your attention. I am eager to put my skills at your disposal and contribute to your team in the realization of ambitious and exciting projects.</p>
    <a href={CV} download="CV Marc Takoumba">Download CV</a> 
  </div>
  </div>
  )
}

export default About