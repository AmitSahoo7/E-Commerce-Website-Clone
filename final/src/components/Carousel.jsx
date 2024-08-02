import React, { useRef, useState } from "react";
import Slider from "react-slick";
import image1 from '../assets/sofa.jpg';
import image2 from '../assets/bed.jpg';
import image3 from '../assets/comforters.jpg';
import image4 from '../assets/dining.jpg';
import image5 from '../assets/plates.jpg';
import image6 from '../assets/comforters.jpg';
import image7 from '../assets/bed.jpg';
import image8 from '../assets/sofa.jpg';
import image9 from '../assets/dining.jpg';



import './Carousel.css';
import { IoPauseCircleOutline } from "react-icons/io5";
import { IoPlayCircleOutline } from "react-icons/io5";



const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Carousel = () => {
  const sliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (isPlaying) {
      sliderRef.current.slickPause();
    } else {
      sliderRef.current.slickPlay();
    }
    setIsPlaying(!isPlaying);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
            <div className="carousel-overlay">
              <h1>{`Slide ${index + 1} Text`}</h1>
              <button className="btn_1">Shop Now</button>

            </div>
          </div>
        ))}
      </Slider>
      <div className="play-pause-button">
        <button className="button_1" onClick={togglePlayPause}>
          <div className="circle-icon">
            {isPlaying ? <IoPauseCircleOutline size={50} /> : <IoPlayCircleOutline size={50} />}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
