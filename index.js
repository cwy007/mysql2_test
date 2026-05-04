const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Cwy17824',
  database: 'practice',
})

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

connection.query('SELECT * FROM customers WHERE name LIKE ?', ['%李%'], (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query results:', results);
});

connection.execute('INSERT INTO customers (name) VALUES (?)', ['王五'], (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Insert results:', results);
});

connection.execute('UPDATE customers SET name = ? WHERE id = ?', ['赵六', 21], (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Update results:', results);
});

connection.execute('DELETE FROM customers WHERE name = ?', ['王五'], (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Delete results:', results);
});

connection.end((err) => {
  if (err) {
    console.error('Error closing the database connection:', err);
    return;
  }
  console.log('Database connection closed.');
});