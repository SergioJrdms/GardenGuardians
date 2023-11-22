import pool from "./conection";

export const executeQuery = async (query: string, values?: any[]) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(query, values);
    return rows;
  } finally {
    connection.release();
  }
};
