import React from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x200/CCCCCC/666666?text=No+Image';
  };

  return (
    <div className="products-container">
      
      <div className="store-welcome">
        <h1>Добро пожаловать в Apple Store</h1>
        <p className="store-description">
          Официальный онлайн-магазин техники Apple в Кыргызстане. Только оригинальная продукция с гарантией.
        </p>
        
        <div className="store-benefits">
          <div className="benefit">
            <span className="benefit-icon">🚚</span>
            <div>
              <h3>Бесплатная доставка</h3>
              <p>При заказе от 50 000 ₽</p>
            </div>
          </div>
          <div className="benefit">
            <span className="benefit-icon">🛡️</span>
            <div>
              <h3>Официальная гарантия</h3>
              <p>12 месяцев от Apple</p>
            </div>
          </div>
          <div className="benefit">
            <span className="benefit-icon">💳</span>
            <div>
              <h3>Рассрочка 0%</h3>
              <p>До 24 месяцев</p>
            </div>
          </div>
          <div className="benefit">
            <span className="benefit-icon">📞</span>
            <div>
              <h3>Консультация</h3>
              <p>Помощь в выборе</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="page-title">Популярные товары</h1>
      <p className="page-subtitle">Лучшие предложения этой недели</p>
      
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
              <div className="product-actions">
                <button className="btn buy-btn">В корзину</button>
              </div>
              <p className="product-description">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="store-info">
        <h2>Почему выбирают Apple Store?</h2>
        <div className="info-grid">
          <div className="info-item">
            <h3>100% оригинал</h3>
            <p>Только официальные поставки от Apple</p>
          </div>
          <div className="info-item">
            <h3>Гарантия лучшей цены</h3>
            <p>Нашли дешевле? Вернем разницу!</p>
          </div>
          <div className="info-item">
            <h3>Быстрая доставка</h3>
            <p>Каракол — 1 день, регионы — 3-7 дней</p>
          </div>
          <div className="info-item">
            <h3>Обмен и возврат</h3>
            <p>14 дней на возврат с обьяснением причины</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;