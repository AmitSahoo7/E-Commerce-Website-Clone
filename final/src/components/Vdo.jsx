import React, { useState, useRef, useEffect } from 'react';
import { IoPauseCircleOutline, IoPlayCircleOutline } from 'react-icons/io5';
import videoSrc from '../assets/food.mp4';
import './Vdo.css';

const Vdo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.3, // Adjust this threshold as needed
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video"
        src={videoSrc}
        muted
        type="video/mp4"
        loop
      />
      <div className="video-overlay">
        <h1>Imagine the possibilities</h1>
        <h2>with free design help</h2>
        <button className="appointment-button">BOOK YOUR APPOINTMENT NOW</button>
      </div>
      <div className="play-pause-button_vdo">
        <button className="button_vdo" onClick={togglePlayPause}>
          <div className="circle-icon_vdo">
            {isPlaying ? <IoPauseCircleOutline size={50} /> : <IoPlayCircleOutline size={50} />}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Vdo;