const firstS = require("../Service/first.Service");

const fController = async (req, res) => {
  try {
    console.log("try");

    const msg = await firstS.fService();
    console.log(msg);

    return res.status(200).send({
      statuscode: 200,
      status: true,
      message: msg,
    });
  } catch (error) {
    console.log("cat");

    return res.status(400).send({
      statuscode: 400,
      status: false,
      message: 'error',
    });
  }
};

module.exports = {fController}