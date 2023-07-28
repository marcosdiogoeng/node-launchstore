const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  password: 'passwd@',
  host: 'localhost',
  port: 5432,
  database: 'launchstore'
});
