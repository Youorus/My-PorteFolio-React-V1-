import { useState, React } from "react";
import { Carousel } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import "./Projet.css";

function Projet() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleLinkClick = () => {
    window.open("https://github.com/Youorus?tab=repositories", "_blank");
  };
  return (
    <div>
      <h2 className="project">Projects</h2>
      <Carousel
        prevIcon={<BsChevronLeft style={{ color: "#007555" }} />}
        nextIcon={<BsChevronRight style={{ color: "#007555" }} />}
        prevLabel=""
        nextLabel=""
        onSelect={handleSelect}
        className="carou-style"
        fade
      >
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <a className="gitLink" href="#" onClick={handleLinkClick}>
        See More on Git{" "}
      </a>
    </div>
  );
}

export default Projet;
