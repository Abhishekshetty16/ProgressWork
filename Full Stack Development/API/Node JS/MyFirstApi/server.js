const express = require("express");
const firouter = require("./Routes/first.Route");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use("/main",firouter)

let PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
