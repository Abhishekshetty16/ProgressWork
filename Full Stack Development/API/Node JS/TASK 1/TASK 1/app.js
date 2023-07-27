const express = require("express");
const jwt =  require("jsonwebtoken");
const cors = require("cors");

const indexRoute = require("./routes/index.route");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true, limit: "50mb"}));

app.use(cors());
app.options("*", cors());

app.use("/abhidemo",indexRoute);


module.exports = app;
