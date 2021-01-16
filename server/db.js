require('dotenv').config()

const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.DB_USER,
  password: '',
  host: process.env.DB_HOST,
  port: 5432,
  database: 'knock_knock'
})

module.exports = pool