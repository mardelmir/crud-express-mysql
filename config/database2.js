const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: 'rootData24$',
    database: 'expressDB'
})

db.connect()

module.exports = db