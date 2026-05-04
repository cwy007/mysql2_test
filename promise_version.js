const mysql = require('mysql2/promise');

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Cwy17824',
      database: 'practice',
    });
    console.log('Connected to the database.');
    return connection;
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
}

async function queryDatabase(connection) {
  try {
    const [results] = await connection.query('SELECT * FROM customers WHERE name LIKE ?', ['%李%']);
    console.log('Query results:', results);
  } catch (err) {
    console.error('Error executing query:', err);
  }
}

async function insertIntoDatabase(connection) {
  try {
    const [results] = await connection.execute('INSERT INTO customers (name) VALUES (?)', ['王五']);
    console.log('Insert results:', results);
  } catch (err) {
    console.error('Error executing query:', err);
  }
}

async function updateDatabase(connection) {
  try {
    const [results] = await connection.execute('UPDATE customers SET name = ? WHERE id = ?', ['赵六', 21]);
    console.log('Update results:', results);
  } catch (err) {
    console.error('Error executing query:', err);
  }
}

async function deleteFromDatabase(connection) {
  try {
    const [results] = await connection.execute('DELETE FROM customers WHERE name = ?', ['王五']);
    console.log('Delete results:', results);
  } catch (err) {
    console.error('Error executing query:', err);
  }
}

async function main() {
  const connection = await connectToDatabase();
  await queryDatabase(connection);
  await insertIntoDatabase(connection);
  await updateDatabase(connection);
  await deleteFromDatabase(connection);
  await connection.end();
  console.log('Database connection closed.');
}

main().catch(err => console.error(err));