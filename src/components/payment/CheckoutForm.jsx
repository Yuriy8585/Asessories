import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'creditCard'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь логику для отправки данных формы, например, на сервер или в Redux хранилище
    console.log(formData);
    // Сброс формы после отправки
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      zipCode: '',
      paymentMethod: 'creditCard'
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Имя:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Фамилия:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Адрес:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Город:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Почтовый индекс:
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Метод оплаты:
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="creditCard">Кредитная карта</option>
          <option value="paypal">PayPal</option>
          <option value="cash">Наличные</option>
        </select>
      </label>

      <button> <Link className="button" to="/Payment">SUBMIT</Link></button>
    </form>
  );
};

export default CheckoutForm;