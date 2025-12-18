import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import BasketList from './pages/BasketList';
import BasketDetail from './pages/BasketDetail';
import CreateOrder from './pages/CreateOrder';
import UpdateOrder from './pages/UpdateOrder';
import OrdersList from './pages/OrdersList';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { CartProvider } from './context/CartContext.jsx';
import { AuthProvider } from './context/AuthContext'; 
import './App.css';

function App() {
  return (

    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/basket" element={<BasketList />} />
              <Route path="/basket/detail" element={<BasketDetail />} />
              <Route path="/create-order" element={<CreateOrder />} />
              <Route path="/orders" element={<OrdersList />} />
              <Route path="/order/:id" element={<UpdateOrder />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;