import React, { createContext, useState, useEffect, useContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Пытаемся получить сохранённую тему
    const saved = localStorage.getItem('appleStoreTheme');
    return saved === 'dark';
  });

  useEffect(() => {
    console.log('🔄 Устанавливаем тему:', isDarkMode ? 'dark' : 'light');
    
    // Сохраняем в localStorage
    localStorage.setItem('appleStoreTheme', isDarkMode ? 'dark' : 'light');
    
    // Устанавливаем CSS переменные
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.style.setProperty('--bg-color', '#000000');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--card-bg', '#1d1d1f');
      root.style.setProperty('--border-color', '#333333');
      root.style.setProperty('--secondary-bg', '#2d2d2f');
      root.style.setProperty('--accent-color', '#0071e3');
      document.body.classList.add('dark-mode');
    } else {
      root.style.setProperty('--bg-color', '#f5f5f7');
      root.style.setProperty('--text-color', '#1d1d1f');
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--border-color', '#e0e0e0');
      root.style.setProperty('--secondary-bg', '#f8f9fa');
      root.style.setProperty('--accent-color', '#0071e3');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    console.log('🎯 Переключаем тему!');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};