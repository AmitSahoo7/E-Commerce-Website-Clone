import React, { useContext, useEffect, useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { UserContext } from './link.jsx';
import './ProdBtn.css';

const ProdBtn = () => {
  const { user } = useContext(UserContext);
  console.log("User in ProdBtn:", user);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (user && user.id === 'admin') {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [user]);

  const handleAddProductClick = () => {
    window.location.href = '/addprod';
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="prod-btn-container">
      <div className="prod-btn" onClick={handleAddProductClick}>
        <span className="arrow1"><BsPlusCircle size={40} /></span>
        <span className="text1">Add Product</span>
      </div>
    </div>
  );
};

export default ProdBtn;
