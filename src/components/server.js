import express from 'express';
import { json } from 'body-parser';
import { createConnection } from 'mysql';

const app = express();
app.use(json());


const connection = createConnection({
    host: 'localhost',
    user: 'root', // 
    password: 'password', // 
    database: 'mysql' // 
});


connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});


function append(req, res) {
    app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    
    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    connection.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({ message: 'Error saving data' });
            return;
        }
        console.log('Data inserted:', results);
        res.status(200).json({ message: 'Login successful' });
    });
});
}
export default append;

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});