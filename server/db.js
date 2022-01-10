const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'AA4Duracell',
  host: 'localhost',
  port: 5432,
  database: 'test-welbex',
});

module.exports = pool;
