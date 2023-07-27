const dotenv = require("dotenv");

dotenv.config();

var config = {
  server: `${process.env.servername}`,
  user: `${process.env.dbname}`,
  password: `${process.env.password}`,
  database: `${process.env.database}`,
  options: {
    trustedConnection: true,
    trustedServerCertificate: true,
    instancename: `SQLEXPRESS`,
  },
  port: 1433,
};

module.exports = config;
