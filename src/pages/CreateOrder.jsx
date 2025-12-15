import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { useNavigate, Link } from 'react-router-dom';

const CreateOrder = () => {
  const { createOrder, cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCreate = () => {
    createOrder();
    navigate('/orders');
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Подтверждение заказа</h1>
      
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Ваша корзина пуста</p>
          <Link to="/" className="btn">Вернуться к покупкам</Link>
        </div>
      ) : (
        <>
          <div>
            <h3>Состав заказа:</h3>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h4 className="item-name">{item.name}</h4>
                  <p className="item-details">
                    ${item.price} × {item.quantity} = ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="total-amount">
            Итого к оплате: ${total}
          </div>
          
          <div>
            <button onClick={handleCreate} className="btn">
              Подтвердить и оплатить
            </button>
            <Link to="/basket" className="btn btn-secondary">
              Вернуться в корзину
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateOrder;