import React from "react";

import Carousel from "./Carousel";
import Carousel_3 from "./Carousel_3";
import Vdo from "./Vdo";
import { Link } from "react-router-dom";

import "../components/Cards.css";
import image1 from "../assets/sofa.jpg";
import image2 from "../assets/bed.jpg";
import image3 from "../assets/comforters.jpg";
import image4 from "../assets/dining.jpg";
import image5 from "../assets/plates.jpg";

export default function Cards() {
  return (
    <div className="container_card">
      <Link to="/add-product">
        <a href="#" className="image-card-link">
          <div className="image-card">
            <img src={image1} alt="Living Room" className="image" />
            <div className="overlay">
              <h1>new & designed with purpose</h1>
              <button className="btn">SHOP SOFAS & SECTIONALS</button>
            </div>
          </div>
        </a>
      </Link>
      <Carousel />
      <Carousel_3 />
      <Vdo />
      <a href="#" className="image-card-link">
        <div className="image-card">
          <img src={image2} alt="Living Room" className="image" />
          <div className="overlay">
            <h1>
              &#9733;&#9733;&#9733;&#9733;&#9733;<br></br>&#x275D; literally the
              bed of our dreams &#x275E;
            </h1>
            <Link to="/addprod">
              <button className="btn">SHOP BEDROOM FURINITURE</button>
            </Link>
          </div>
        </div>
      </a>
      <a href="#" className="image-card-link">
        <div className="image-card">
          <img src={image3} alt="Living Room" className="image" />
          <div className="comfort">
            <h1>our new cozy comforters</h1>
            <button className="btn">ALL BEDDING SHIPS FREE</button>
          </div>
        </div>
      </a>
      <Carousel />
      <Carousel_3 />
      <a href="#" className="image-card-link">
        <div className="image-card">
          <img src={image4} alt="Living Room" className="image" />
          <div className="overlay" id="dining">
            <h1>that effortless look</h1>
            <button className="btn">SHOP DINING FURINITURE</button>
          </div>
        </div>
      </a>
      <a href="#" className="image-card-link">
        <div className="image-card">
          <img src={image5} alt="Living Room" className="image" />
          <div className="overlay" id="plates">
            <h1>
              It all started with whiteware.Serving everyday special since 1962.
            </h1>
            <button className="btn">SHOP 35+ COLLECTIONS</button>
          </div>
        </div>
      </a>
      <Carousel />
      <Carousel_3 />
      <a href="#" className="image-card-link">
        <div className="image-card">
          <img src={image4} alt="Living Room" className="image" />
          <div className="overlay" id="dining">
            <h1>that effortless look</h1>
            <button className="btn">SHOP DINING FURINITURE</button>
          </div>
        </div>
      </a>
    </div>
  );
}
