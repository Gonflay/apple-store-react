import React, { useContext, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const UpdateOrder = () => {
  const { id } = useParams();
  const { orders, updateOrder } = useContext(CartContext);
  const order = orders.find(o => o.id === parseInt(id));
  const [items, setItems] = useState(order ? [...order.items] : []);
  const navigate = useNavigate();

  const handleUpdate = () => {
    updateOrder(parseInt(id), items);
    navigate('/orders');
  };

  const removeItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  if (!order) return (
    <div className="cart-container">
      <h2>Заказ не найден</h2>
      <Link to="/orders" className="btn">Вернуться к заказам</Link>
    </div>
  );

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <Link to="/orders" className="back-link">← Назад к заказам</Link>
      <h1 className="cart-title">Редактировать заказ #{id}</h1>
      
      {items.length === 0 ? (
        <p className="cart-empty">В заказе нет товаров</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-details">
                  ${item.price} × {item.quantity} = ${item.price * item.quantity}
                </p>
              </div>
              <button 
                onClick={() => removeItem(item.id)} 
                className="btn btn-danger"
              >
                Удалить из заказа
              </button>
            </div>
          ))}
          <div className="total-amount">
            Итого: ${total}
          </div>
        </>
      )}
      
      <div>
        <button onClick={handleUpdate} className="btn">
          Сохранить изменения
        </button>
        <button onClick={() => navigate('/orders')} className="btn btn-secondary">
          Отмена
        </button>
      </div>
    </div>
  );
};

export default UpdateOrder;