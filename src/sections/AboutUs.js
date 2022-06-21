import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-info">
        <h2 className="about-us-title">Nuestra historia</h2>
        <p className="about-us-p">
          Nos encontramos por casualidad, o porque estaba todo escrito, sea como
          sea, siempre con la sensación de que eramos algo muy especial. Este
          tiempo compartido fue hermoso pero es apenas el comienzo de una nueva
          aventura llena de emociones, aprendizaje y amor.
        </p>
      </div>
      <div className="about-us-images-container">
        <div className="about-us-images-row-a">
          <img
            className="about-us-image"
            src={`http://drive.google.com/uc?export=view&id=1LEiHDydZutzE3fhKjY80TUQgPTKNCepM`}
          />
          <img
            className="about-us-image"
            src={`http://drive.google.com/uc?export=view&id=1DgRbFor20OiaaLNgkaTusVbAQErZ_jMX`}
          />
        </div>
        <div className="about-us-images-row-b">
          <img
            className="about-us-image"
            src={`http://drive.google.com/uc?export=view&id=1zhelvu5I9EZB9e-kWk4cgV1ZytzYuLRT`}
          />

          <img
            className="about-us-image"
            src={`http://drive.google.com/uc?export=view&id=1SNihb9dKo34PayexaSqiHLGymA-HYn0T`}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
