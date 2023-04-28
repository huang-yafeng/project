const mysql = require('mysql');

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: 'root',
    password: 'root',
    port: '3306',
    database: "web-server",
    multipleStatements: true,//允许每个mysql有多条查询
    connectionLimit: 10,
})


module.exports = pool