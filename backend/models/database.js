const mysql=require('mysql2')

const pool=mysql.createPool({
    user:'root',
    password:'1820bethwel',
    database:'timetable',
    host:'localhost',
    connectionLimit:10,
    waitForConnections:true,
    queueLimit:0
});

module.exports = pool;