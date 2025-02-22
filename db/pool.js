const { Pool } = require('pg')

console.log(process.env)

module.exports = new Pool({
    host: process.env.PGHOST, // or wherever the db is hosted
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: 5432 // The default port
})