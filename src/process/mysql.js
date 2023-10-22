const mysql = require('mysql2');

const defaultConfig = {
  database: 'mysql',
  dateStrings: true,
};

let connection = null;
const query = async (sql) => new Promise((resolve, reject) => {
  connection.query(sql, (error, result, fields) => {
    if (error) {
      reject(error);
    } else {
      resolve({ result, fields });
    }
  });
});

const activeConnection = async (config) => {
  const processedConfig = {
    ...defaultConfig,
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database,
  };
  connection = mysql.createConnection(processedConfig);
  return true;
};

export default {
  query,
  activeConnection,
};