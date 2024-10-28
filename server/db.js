const Pool = require("pg").Pool;

//This variable points to the hidden environment variables file to create a secure connection to the database
const pool = new Pool({
    user: process.env.user,
    password: process.env.host,
    host: process.env.host,
    port: process.env.port,
    database: process.env.database
})