import React from 'react';
import './ImageCard.css';
import image from '../assets/bed.jpg';

const ImageCard = () => {
  return (
    <a href="#" className="image-card-link">
      <div className="image-card">
        <img src={image} alt="Furniture Display" className="image" />
        <div className="overlay">
          <button className="btn">Chat With Us</button>
        </div>
      </div>
    </a>
  );
};

export default ImageCard;
