const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'mydb'
})

module.exports = db;