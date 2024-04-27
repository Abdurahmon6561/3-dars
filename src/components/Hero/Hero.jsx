import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text">
        <h2 className="hero_h2">
          Discover and share the <br /> world’s best photos
        </h2>
        <p className="hero_p">
          Get inspired with incredible photos from diverse styles and genres
          around the <br /> world. We're not guided by fads—just great
          photography.
        </p>
        <button type="button" className="btn_3">
          Sing up
        </button>
      </div>
    </div>
  );
};

export default Hero;
