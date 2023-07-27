const config = require("../database/dbConfig");
const sql = require("mssql");

const firstSp = async (name) => {
  let pool = await sql.connect(config);
  var name = name;
  let qname = "[dbo].[AbhiFirstDemo] @name='" + name + "'";
  let data = await pool.request().query(qname);
  return data;
};

const secondQuery = async () => {
  let pool = await sql.connect(config);
  let singleQuery = `select * from RM_Tickets`;
  let data = await pool.request().query(singleQuery);
  return data;
};

module.exports = { firstSp, secondQuery };
