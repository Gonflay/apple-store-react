import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Apple Store</h1>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/basket">Корзина</Link>
          <Link to="/orders">Заказы</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;