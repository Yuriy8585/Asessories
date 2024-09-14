const express = require('express');
const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');

const app = express();

const dbConfig = {
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
};

const db = mysql.createPool(dbConfig);

// Register user
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  db.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword])
    .then(() => {
      res.json({ message: 'User created successfully' });
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error creating user' });
    });
});

// Login user
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.execute('SELECT * FROM users WHERE username = ?', [username])
    .then(([user]) => {
      if (!user) {
        res.status(401).json({ error: 'Invalid username or password' });
      } else {
        const isValid = bcrypt.compareSync(password, user.password);
        if (isValid) {
          const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
          res.json({ token });
        } else {
          res.status(401).json({ error: 'Invalid username or password' });
        }
      }
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error logging in' });
    });
});

// Authenticate requests
app.use((req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
});