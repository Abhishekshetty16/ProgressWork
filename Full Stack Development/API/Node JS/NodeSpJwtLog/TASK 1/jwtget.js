const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const getJWTToken = async (name) => {
  const eToken = jwt.sign({ name }, process.env.JWT_SECRET_KEY, {
    expiresIn: "24h",
  });
  return eToken;
};

const verifyJWTToken = (req, res) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  try {
    const token = req.header(tokenHeaderKey);
    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return res.send({ message: "Success" });
    } else {
      return res.status(401).send(error);
    }
  } catch (error) {
    return res.status(401).send(error);
  }
};

module.exports = { getJWTToken, verifyJWTToken };
