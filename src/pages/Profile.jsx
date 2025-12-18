import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Профиль пользователя</h2>
      
      {user ? (
        <div>
          <p><strong>Имя:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Телефон:</strong> {user.phone}</p>
          <p><strong>Адрес:</strong> {user.address}</p>
          
          <button 
            onClick={logout}
            style={{
              padding: '10px 20px',
              background: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Выйти из аккаунта
          </button>
        </div>
      ) : (
        <p>Вы не авторизованы. Пожалуйста, войдите или зарегистрируйтесь.</p>
      )}
    </div>
  );
};

export default Profile;