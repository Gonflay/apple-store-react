import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header-container">
        <h1>Apple Store</h1>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/basket">Корзина</Link>
          <Link to="/orders">Заказы</Link>
          
          {user ? (
            <>
              <Link to="/profile">Профиль ({user.fullName})</Link>
              <button 
                onClick={logout}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  padding: 0,
                  marginLeft: '15px'
                }}
              >
                Выйти
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Войти</Link>
              <Link to="/register">Регистрация</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;