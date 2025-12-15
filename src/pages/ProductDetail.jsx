import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/500x500/CCCCCC/666666?text=No+Image';
  };

  if (!product) return (
    <div className="cart-container">
      <h2>Продукт не найден</h2>
      <Link to="/" className="btn">Вернуться к продуктам</Link>
    </div>
  );

  const handleAddToCart = () => {
    addToCart(product);
    alert(`✅ ${product.name} добавлен в корзину!`);
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-wrapper">
        <Link to="/" className="back-link">← Назад к продуктам</Link>
        <div className="product-detail">
          <img 
            src={product.image} 
            alt={product.name} 
            className="detail-image"
            onError={handleImageError}
          />
          <div className="detail-info">
            <h1 className="detail-name">{product.name}</h1>
            <p className="detail-price">${product.price}</p>
            <p className="detail-description">{product.description}</p>
            <div style={{ marginTop: '40px' }}>
              <button onClick={handleAddToCart} className="btn" style={{ fontSize: '1.2rem', padding: '16px 35px' }}>
                🛒 Добавить в корзину
              </button>
              <Link to="/basket" className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '16px 35px' }}>
                Перейти в корзину
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;