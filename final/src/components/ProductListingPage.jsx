import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../components/link';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        const formattedData = data.map(product => ({
          ...product,
          colors: Array.isArray(product.colors) ? product.colors : [],
          rating: {
            rate: Number(product.rating?.rate) || 0,
            count: product.rating?.count || 0
          }
        }));
        setProducts(formattedData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductDelete = (deletedProductId) => {
    setProducts(products.filter(product => product.id !== deletedProductId));
  };

  return (
    <div className="product-listing-page">
      <h1>Sectional Sofas</h1>
      <a href="#" className="shop-all">Shop All (648)</a>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={product.id || index} product={product} onProductDelete={handleProductDelete} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
