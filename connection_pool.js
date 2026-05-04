const mysql = require('mysql2/promise');

async function createConnectionPool() {
  try {
    const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'Cwy17824',
      database: 'practice',
      waitForConnections: true, // Wait for connections when the pool is full
      connectionLimit: 10, // Maximum number of connections in the pool
      queueLimit: 0, // Unlimited queueing of connection requests
      maxIdle: 10, // Maximum number of idle connections
      idleTimeout: 60000, // Idle timeout in milliseconds
      enableKeepAlive: true, // Enable keep-alive for connections
      keepAliveInitialDelay: 0, // Initial delay for keep-alive in milliseconds
    });
    console.log('Connection pool created.');
    return pool;
  } catch (err) {
    console.error('Error creating connection pool:', err);
    throw err;
  }
}

async function main() {
  const pool = await createConnectionPool();
  // You can now use the pool to get connections and execute queries
  const [results] = await pool.query('SELECT * FROM customers WHERE name LIKE ?', ['%李%']);
  console.log('Query results:', results);
}

main().catch((err) => {
  console.error('Error in main function:', err);
});