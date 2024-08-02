import React, { useState, useRef } from "react";
import Slider from "react-slick";
import image1 from "../assets/sofa.jpg";
import image2 from "../assets/bed.jpg";
import image3 from "../assets/comforters.jpg";
import image4 from "../assets/dining.jpg";
import image5 from "../assets/plates.jpg";
import image6 from "../assets/comforters.jpg";
import image7 from "../assets/bed.jpg";
import image8 from "../assets/sofa.jpg";
import image9 from "../assets/dining.jpg";
import { Link } from "react-router-dom";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import "./Carousel_3.css";

const slides = [
  { image: image1, text: "Sofa" },
  { image: image2, text: "Bed" },
  { image: image3, text: "Comforters" },
  { image: image4, text: "Dining" },
  { image: image5, text: "Plates" },
  { image: image6, text: "Comforters" },
  { image: image7, text: "Bed" },
  { image: image8, text: "Sofa" },
  { image: image9, text: "Dining" },
];

const CustomNextArrow = ({ onClick, isDisabled }) => {
  return (
    <button
      className={`carousel3-slick-next ${isDisabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  );
};

const CustomPrevArrow = ({ onClick, isDisabled }) => {
  return (
    <button
      className={`carousel3-slick-prev ${isDisabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <i className="fas fa-chevron-left"></i>
    </button>
  );
};

const Carousel_3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    afterChange: (index) => setCurrentIndex(index),
    nextArrow: (
      <CustomNextArrow isDisabled={currentIndex >= slides.length - 3} />
    ),
    prevArrow: <CustomPrevArrow isDisabled={currentIndex === 0} />,
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="carousel3-wrapper">
      <div className="carousel3-navigation">
        <button
          className={`carousel3-slick-prev ${currentIndex === 0 ? "disabled" : ""
            }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <i className="fas fa-chevron-left"></i>
          <SlArrowLeft size={30} />
        </button>
        <span className="carousel3-text">new & trending for fall</span>
        <button
          className={`carousel3-slick-next ${currentIndex >= slides.length - 3 ? "disabled" : ""
            }`}
          onClick={handleNext}
          disabled={currentIndex >= slides.length - 3}
        >
          <i className="fas fa-chevron-right"></i>
          <SlArrowRight size={30} />
        </button>
      </div>
      <div className="carousel3-slider-container">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <a href="#" key={index}>
              <Link to="/add-product">
                <div className="carousel3-slide">
                  <img
                    src={slide.image}
                    alt={`Slide ${index}`}
                    className="carousel3-slide-image"
                  />
                  <p className="carousel3-slide-text">{slide.text}</p>
                </div>
              </Link>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel_3;
