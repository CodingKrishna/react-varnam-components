import React, { useState } from 'react';
import './Coursoel.css';
import htmlImg from './Images/html.png';
import cssImg from './Images/css.jpg';
import jsImg from './Images/javascript.jpg';
import angularImg from './Images/Angular.jpg';

const Coursoel = () => {
  const images = [htmlImg, cssImg, jsImg, angularImg];
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div id="coursoel" className="col-md-12 col-xs-12 acc-sec cls-shadow">
      <h1 className="txt-cntr">coursoel</h1>
      <div className="col-md-12 col-xs-12">
        <div className="slideShow">
          <img
            className="slides"
            src={images[slideIndex]}
            style={{ width: '100%' }}
            alt="Slide"
          />
          <button className="slide-btn left-btn" onClick={prevSlide}>&#10094;</button>
          <button className="slide-btn right-btn" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>
    </div>
  );
};

export default Coursoel;
