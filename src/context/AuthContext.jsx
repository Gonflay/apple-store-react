import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const register = (userData) => {
    const newUser = { ...userData, id: Date.now() };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const login = (email, password) => {
    const saved = localStorage.getItem('user');
    if (saved) {
      const parsedUser = JSON.parse(saved);
      if (parsedUser.email === email && parsedUser.password === password) {
        setUser(parsedUser);
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};