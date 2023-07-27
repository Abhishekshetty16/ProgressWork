const config = require("../database/dbConfig");
// const sql = require("mssql2");
const sql = require("mssql");

const firstSp = async (name) => {
  // console.log("hello");
  let pool = await sql.connect(config);
    var name = name;
    console.log(name);

  let qname = "[dbo].[AbhiFirstDemo] @name='" + name + "'";

  let data = await pool.request().query(qname);
  // console.log(data);

  return data;
};

const secondQuery = async () => {
  console.log("second");
  let pool = await sql.connect(config);
  let singleQuery = `select * from RM_Tickets`;
  console.log(singleQuery);
  let data = await pool.request().query(singleQuery);
  // console.log(data1);
  return data
};

module.exports = { firstSp,secondQuery };
// module.exports = firstSp; // not working



// var request = new sql.Request();

// request.input(dataObj[i][0], dataObj[i][1])

// request.input('key', 'value')

// request.execute(req.query.SP, function (err, recordset) {

//             res.json(recordset);

//             if (err) {

//                 logger.error(err);

//             }

//         });