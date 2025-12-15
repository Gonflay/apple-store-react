import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const OrdersList = () => {
  const { orders, deleteOrder } = useContext(CartContext);

  return (
    <div className="orders-container">
      <h1 className="orders-title">Мои заказы</h1>
      {orders.length === 0 ? (
        <div className="orders-empty">
          <p>У вас пока нет заказов</p>
          <Link to="/" className="btn">Перейти к покупкам</Link>
        </div>
      ) : (
        <>
          {orders.map(order => (
            <div key={order.id} className="order-item">
              <div className="item-info">
                <h3 className="item-name">Заказ #{order.id}</h3>
                <p className="item-details">
                  Товаров: {order.items.length} | Создан: {new Date(order.id).toLocaleDateString()}
                </p>
              </div>
              <div className="item-total">${order.total}</div>
              <div>
                <Link to={`/order/${order.id}`} className="btn">
                  Редактировать
                </Link>
                <button 
                  onClick={() => deleteOrder(order.id)} 
                  className="btn btn-danger"
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default OrdersList;