import React, { useState } from 'react';
import '../App.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Ваш запрос принят. Мы свяжемся с вами в течение 24 часов.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-container">
      <div className="contacts-page">
        <h1>Контакты Apple Store</h1>
        
        <div className="contacts-content">
          <div className="contact-info">
            <h2>Связаться с нами</h2>
            
            <div className="contact-item">
              <h3>Телефон для заказов</h3>
              <p className="contact-detail">+(996)557 496 333</p>
              <p className="contact-description">Бесплатный звонок по Кыргызстану</p>
            </div>
            
            <div className="contact-item">
              <h3>Электронная почта</h3>
              <p className="contact-detail">order@applestore.ru</p>
              <p className="contact-description">Для заказов и консультаций</p>
            </div>
            
            <div className="contact-item">
              <h3>Техническая поддержка</h3>
              <p className="contact-detail">support@applestore.ru</p>
              <p className="contact-description">По вопросам гарантии и ремонта</p>
            </div>
            
            <div className="contact-item">
              <h3>Адрес офиса</h3>
              <p className="contact-detail">Каракол/дом Эрбола</p>
              <p className="contact-description">Пункт выдачи заказов</p>
            </div>
            
            <div className="contact-item">
              <h3>Часы работы</h3>
              <p className="contact-detail">Пн-Пт: 9:00-21:00</p>
              <p className="contact-detail">Сб-Вс: 10:00-20:00</p>
              <p className="contact-description">Онлайн-заказы принимаются круглосуточно</p>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Обратная связь</h2>
            <p className="form-description">
              Остались вопросы? Заполните форму, и наш менеджер свяжется с вами.
            </p>
            
            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="form-group">
                <label>Имя *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Телефон *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (999) 999-99-99"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.ru"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Ваш вопрос</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Опишите ваш вопрос или оставьте комментарий к заказу..."
                  rows="4"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Отправить запрос
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;