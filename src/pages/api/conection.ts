import { createPool, Pool } from 'mysql2/promise';

const pool: Pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '1234567',
  database: 'garden_guardians',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;