const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const app = express();

dotenv.config();
let PORT = 8080
// let PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

console.log(process.env.JWT_SECRET_KEY);
console.log(process.env.TOKEN_HEADER_KEY);

// Generating JWT TOKEN
//http://localhost:8000/user/generateToken
app.post("/user/generateToken", (req, res) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: 1,
  };
  const token = jwt.sign(data, jwtSecretKey);
  res.send(token);
});

// Verify JWT Token
//http://localhost:8000/user/validateToken
// Use this in Header :[{"key":"gfg_token_header_key","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiTW9uIEp1bCAyNCAyMDIzIDEyOjE4OjA0IEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKSIsInVzZXJJZCI6MSwiaWF0IjoxNjkwMTgxMjg0fQ.p0XOqnyEZHVUM8gjUhPwSiS5L3H1J2FBl8-4y9YNTJ4","description":"","type":"default","enabled":true}]
app.get("/user/validateToken", (req, res) => {

  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    console.log("t");
    const token = req.header(tokenHeaderKey);
    // console.log(token);
    const verified = jwt.verify(token, jwtSecretKey);
    console.log(verified);
    if (verified) {
      return res.send("Success");
    } else {
      return res.status(401).send(error);
    }
  } catch (error) {
    console.log("C");

    return res.status(401).send(error);
  }
});
