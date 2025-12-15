import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const BasketDetail = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Детали корзины</h1>
      
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Ваша корзина пуста</p>
          <Link to="/" className="btn">Вернуться к покупкам</Link>
        </div>
      ) : (
        <>
          <div>
            <h3>Товары в корзине:</h3>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h4 className="item-name">{item.name}</h4>
                  <p className="item-details">
                    ${item.price} × {item.quantity} = ${item.price * item.quantity}
                  </p>
                </div>
                <div className="item-total">${item.price * item.quantity}</div>
              </div>
            ))}
          </div>
          
          <div className="total-amount">
            Общая сумма: ${total}
          </div>
          
          <div>
            <Link to="/create-order" className="btn">
              Оформить заказ
            </Link>
            <Link to="/basket" className="btn btn-secondary">
              Редактировать корзину
            </Link>
            <Link to="/" className="btn btn-secondary">
              Продолжить покупки
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default BasketDetail;