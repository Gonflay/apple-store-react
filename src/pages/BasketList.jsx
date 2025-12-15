import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const BasketList = () => {
  const { cart, removeFromCart, createOrder } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Корзина</h1>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Ваша корзина пуста</p>
          <Link to="/" className="btn">Вернуться к покупкам</Link>
        </div>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-details">
                  ${item.price} × {item.quantity} = ${item.price * item.quantity}
                </p>
              </div>
              <div className="item-total">${item.price * item.quantity}</div>
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="btn btn-danger"
              >
                Удалить
              </button>
            </div>
          ))}
          <div className="total-amount">
            Итого: ${total}
          </div>
          <div>
            <button onClick={createOrder} className="btn">
              Оформить заказ
            </button>
            <Link to="/" className="btn btn-secondary">
              Продолжить покупки
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default BasketList;