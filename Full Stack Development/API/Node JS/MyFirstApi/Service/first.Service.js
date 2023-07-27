const config = require("../DB/sqlConfig");

const sql = require("mssql2");

// const dotenv = require('dotenv');

// dotenv.config()

const fService = async () => {
//   console.log("que");
//     let p= await config
//     console.log(p); 

  let pool = await sql.connect(config);
  let que = "select * from tblProfile";

  let data = await pool.request().query(que);

  return data;
};

module.exports = { fService };
