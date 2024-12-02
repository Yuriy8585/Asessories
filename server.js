const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Подключение к базе данных
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'user_registration'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Регистрация пользователя
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Проверка на существование пользователя
    db.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            return res.status(400).json({ message: 'User  already exists' });
        }

        // Добавление нового пользователя
        db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err, results) => {
            if (err) throw err;
            res.status(201).json({ message: 'User  registered successfully' });
        });
    });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});