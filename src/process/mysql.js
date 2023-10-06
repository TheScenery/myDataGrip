const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'shop_assist'
});

connection.query('SELECT * from t_user', function(error, results, fields) {
  if (error) throw error;
  // connected!
  console.log(results);
  console.log(fields);
});