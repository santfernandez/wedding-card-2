import { React, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import "../styles/ImageCarousel.css";

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel pause="hover">
        <Carousel.Item>
          <img
            className="img-carousel"
            src={`http://drive.google.com/uc?export=view&id=1z5FNEwo_99MBfgOyqSj83jllSNL55SUy`}
            fluid
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-carousel"
            src={`http://drive.google.com/uc?export=view&id=1_qPW1h70N6NSG9robebXaI98Y-kkbcw5`}
            fluid
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-carousel"
            src={`http://drive.google.com/uc?export=view&id=1VykLD6UASKVSUPUFaMytHQE6JWhkvWg4`}
            fluid
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
