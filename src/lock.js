const express = require('express');
const mysql = require('AccessoriesShopDB');

const app = express();

const DbConfig = {
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'AccessoriesShopDB'
};


const db = mysql.createPool(DbConfig);


// Test the connection
db.execute('SELECT 1 + 1 AS result')
  .then(([results]) => {
    console.log(results[0].result); // Output: 2
  })
  .catch((err) => {
    console.error(err);
  });

db.execute('SELECT * FROM Customers')
  .then(([results]) => {
    console.log(results); // Output: array of customer objects
  })
  .catch((err) => {
    console.error(err);
  });

app.get('/customers', (req, res) => {
    db.execute('SELECT * FROM Customers')
      .then(([results]) => {
        res.json(results);
      })
      .catch((err) => {
        res.status(500).json({ error: 'Error retrieving customers' });
      });
  });

app.listen(3000, () => {
    console.log('Server started on port 3000');
  });

