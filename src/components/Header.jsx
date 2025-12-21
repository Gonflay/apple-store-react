import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-container">
        {/* ЛЕВАЯ ЧАСТЬ - ЛОГОТИП И ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ */}
        <div className="header-left">
          <button 
            onClick={toggleTheme}
            className="theme-toggle"
            title={isDarkMode ? 'Светлая тема' : 'Тёмная тема'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <h1>Apple Store</h1>
        </div>
        
        {/* ПРАВАЯ ЧАСТЬ - НАВИГАЦИЯ */}
        <div className="header-right">
          <nav>
            <Link to="/">Главная</Link>
            <Link to="/basket">Корзина</Link>
            <Link to="/orders">Заказы</Link>
            <Link to="/about">О нас</Link>
            <Link to="/contacts">Контакты</Link>
            
            {user ? (
              <>
                <Link to="/profile">Профиль ({user.fullName})</Link>
                <button 
                  onClick={logout}
                  className="logout-btn"
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
      </div>
    </header>
  );
};

export default Header;