import React, { useEffect, useRef, useState } from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-content-a">
          <div className="date-and-icon">
            <img
              className="home-icon"
              src={`https://drive.google.com/uc?export=view&id=1pyQr_TMOb5REBhjjJ2yZwy5PTzeFaEyp`}
            />
          </div>
        </div>
        <div className="home-content-b">
          <div className="home-title">
            <h2>Joaquín</h2>
            <p className="middle-title">&</p>
            <h2>Sofía</h2>
          </div>
        </div>
        <div className="home-content-c">
          <span className="home-date">Sábado 13 de Agosto</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
