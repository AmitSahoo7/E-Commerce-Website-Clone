import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../components/link';
import './ProductDetailPage.css';
import { CartContext } from '../components/link';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-detail-page">
      <div className="product-images">
        <div className="main-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="image-thumbnails">
          {product.images?.map((img, index) => (
            <img key={index} src={img} alt={`${product.title} ${index + 1}`} />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="exclusive">New • Exclusive</p>
        <p className="product-price1">{product.price}</p>
        <p className="rating"> ★ {product.rating.rate} ({product.rating.count} Reviews)</p>
        <div className="options">
          <div className="option">
            <span className="option-title">Size</span>
            <div className="option-values">
              {/* Add size options here */}
              <button className="option-button">80" 2-Seat Sofa</button>
              <button className="option-button selected">93" 2-Seat Sofa</button>
            </div>
          </div>
          <div className="option">
            <span className="option-title">Fabric</span>
            <div className="option-values">
              {/* Add fabric options here */}
              <button className="option-button">Serene Fabric in Ivory</button>
            </div>
          </div>
        </div>
        <div className="delivery">
          <h2>In-Home Delivery</h2>
          <p>In stock and ready for delivery to ZIP code <span className="zip-code">60540</span></p>
          <ul>
            <li>Placement in the room of your choice</li>
            <li>Assembly & removal of packaging</li>
            <li>Order multiple items, pay one flat rate delivery fee</li>
          </ul>
        </div>
        <div className="quantity-price">
          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <p className="total-price">{product.price}</p>
        </div>
        <div className="actions">
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          {/* <button className="add-to-registry">Add to Registry</button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
