
require("dotenv").config();

var config = {
	server:`${process.env.dbIp}`, // assign your host name     "10.159.78.14"
	user: `${process.env.userId}` , //  assign your database username     "k2dbfarm"
	password: `${process.env.dbPassword}` , // assign your database password    "Jio@2016"
	database: `${process.env.dbName}`, // assign database Name       "SRDB"
	options: {
		trustedconnection: true,
		enableArithAbort: true,
		trustServerCertificate: true,
		instancename: "SQLEXPRESS", // SQL Server instance name
	},
	port: 1433,
};

module.exports = config;
