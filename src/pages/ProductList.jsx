import React from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x200/CCCCCC/666666?text=No+Image';
  };

  return (
    <div className="products-container">
      <h1 className="page-title">Продукты Apple</h1>
      <div className="products-grid">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image"
              onError={handleImageError}
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;