import { useState, useEffect } from 'react';
import { BsArrowUp } from "react-icons/bs";
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top-container" style={{ display: isVisible ? 'block' : 'none' }}>

      <div className="back-to-top" onClick={scrollToTop}>
        <span className="arrow"> <BsArrowUp size={25} /></span>
        <span className="text">Back to Top</span>

      </div>
    </div>
  );
};

export default BackToTop;
