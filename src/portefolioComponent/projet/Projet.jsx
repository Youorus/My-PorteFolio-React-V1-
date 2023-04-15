import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Projet.css"

function Projet() {
  return (<div>
<Carousel className='carou-style'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.xenonstack.com/hubfs/xenonstack-reactjs-project-structure.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/ly3m6mv5qvg/maxresdefault.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220310072422/7-Best-React-Project-Ideas-for-Beginners-in-2022.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <a className='gitLink' href="/">See More on Git </a> 
  </div>
    
  );
}


export default Projet;