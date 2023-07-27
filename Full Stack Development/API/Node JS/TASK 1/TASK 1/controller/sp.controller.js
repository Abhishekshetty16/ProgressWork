const firstSp1 = require("../services/sp.service");

const firstSpContro = async (req, res) => {
  try {
    console.log("try");
    const name = req.query.name;
    console.log(`hello : ${name}`);

    const myData = await firstSp1.firstSp(name);
    // console.log(data);

    return res.status(200).send({
      statuCode: 200,
      status: true,
    //   message: myData.recordset[0]
      message: myData

    });
  } catch (error) {
    console.log("catch");
    return res.status(500).send({
      statuCode: 500,
      message: "error",
    });
  }
};

const secondSpContro = async (req, res) => {
  try {
    console.log("try");

    const data = await firstSp1.secondQuery();
    console.log(data);

    return res.status(200).send({
      statuCode: 200,
      status: true,
      message: data,
    });
  } catch (error) {
    console.log("catch");
    return res.status(500).send({
      statuCode: 500,
      message: "error",
    });
  }
};

module.exports = { firstSpContro, secondSpContro };
