import React from "react";
import "./Hero.scss";
const Hero = () => {
  return (

<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
       <h1>Get your <span>Education</span> today!</h1>
      <img src="https://c0.wallpaperflare.com/preview/416/65/82/the-john-rylands-library-john-rylands-library-libraries.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <h1>Get your <span>Education</span> today!</h1>
      <img src="https://c0.wallpaperflare.com/preview/416/65/82/the-john-rylands-library-john-rylands-library-libraries.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <h1>Get your <span>Education</span> today!</h1>
      <img  src="https://c0.wallpaperflare.com/preview/416/65/82/the-john-rylands-library-john-rylands-library-libraries.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
};

export default Hero;
