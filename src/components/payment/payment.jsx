
//npm install @stripe/stripe-js

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your_publishable_key');

const PaymentForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const stripe = await stripePromise;
    return {stripe}
    // Отправка данных карты на сервер
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Форма для ввода данных карты */}
      {/* Кнопка для отправки формы */}
    </form>
  );
};

const PaymentComponent = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default PaymentComponent;