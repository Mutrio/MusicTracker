require('dotenv').config();

console.log("DB_HOST:" , process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:" , process.env.DB_PW);
//설치한 mysql 모듈 불러오기
const mysql = require('mysql');
// const Connection = require('mysql2/typings/mysql/lib/Connection');

//연결 설정 셋팅
const db = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        password: process.env.DB_PW,
        waitForConnections: true,
        insecureAuth: true
});
console.log('db연결: ', db.DB_NAME);

module.exports= db;
