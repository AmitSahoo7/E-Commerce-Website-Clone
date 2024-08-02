import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';
import { deleteProduct } from '../components/link';

const ProductCard = ({ product, onProductDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      await deleteProduct(product.id);
      onProductDelete(product.id);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };



  return (
    <div className="product-card" onClick={handleClick}>
      {product.bestSeller && <div className="badge">Best Seller</div>}
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="color-swatches">
        {(product.colors || []).map((color, index) => (
          <span key={index} className="color-swatch" style={{ backgroundColor: color }}></span>
        ))}
        {product.colors && product.colors.length > 4 && <span className="more-colors"> + More</span>}
      </div>
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">
        Price: ${product.price}
        {product.originalPrice && <span className="original-price">MRP: ${product.originalPrice}</span>}
      </p>
      {product.rating && (
        <p className="product-price">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </p>
      )}
      <button className="favorite-button">♡</button>

      {/* <button className="delete-button" onClick={handleDelete}>Delete</button> */}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    bestSeller: PropTypes.bool,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    originalPrice: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }),
    colors: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onProductDelete: PropTypes.func.isRequired,
};

export default ProductCard;
