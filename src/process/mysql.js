const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'shop_assist',
});

export const query = async (sql) => new Promise((resolve, reject) => {
  connection.query(sql, (error, result, fields) => {
    if (error) {
      reject(error);
    } else {
      resolve({ result, fields });
    }
  });
});