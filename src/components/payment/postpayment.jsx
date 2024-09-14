const express = require('express');
const router = express.Router();
const stripe = require('stripe')('your_secret_key');

// Эндпоинт для обработки платежа
router.post('/payment', async (req, res) => {
  const { amount, currency, payment_method_id } = req.body;

  try {
    // Создание платежного намерения (payment intent) в Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      payment_method: payment_method_id,
      confirm: true, // Подтверждение платежа сразу
    });

    // Отправка ответа о успешном выполнении платежа
    res.status(200).json({ success: true, message: 'Payment succeeded', paymentIntent });
  } catch (error) {
    console.error('Error processing payment:', error);
    // Отправка ответа о неудаче платежа
    res.status(400).json({ success: false, message: 'Payment failed', error: error.message });
  }
});

module.exports = router;