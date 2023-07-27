const firstSp1 = require("../services/sp.service");
const GenJWT = require("../jwtget");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const logger = require("../controller/logger");

const firstSpContro = async (req, res) => {
  try {
    const name = req.query.name;
    const myData = await firstSp1.firstSp(name);
    //Generating token
    let token = await GenJWT.getJWTToken(name);
    //logger
    logger.myLogger.log("info", "successfully got try");
    return res.status(200).send({
      statuCode: 200,
      status: true,
      token: token,
      //   message: myData.recordset[0]
      message: myData,
    });
  } catch (error) {
    //logger
    logger.myLogger.log("error", "successfully got catch");
    return res.status(500).send({
      statuCode: 500,
      message: "error",
    });
  }
};

const secondSpContro = async (req, res) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  try {
    const token = req.header(tokenHeaderKey);
    //verifying token

    const verified = await jwt.verify(token, jwtSecretKey);

    if (verified) {
      const data = await firstSp1.secondQuery();
      return res.status(200).send({
        statuCode: 200,
        // msg: " JWT Verified successfully",
        status: true,
        message: data,
      });
    } else {
      return res.status(401).send(error);
    }
  } catch (error) {
    return res.status(500).send({
      statuCode: 500,
      message: "error",
      msg: error,
    });
  }
};

module.exports = { firstSpContro, secondSpContro };
